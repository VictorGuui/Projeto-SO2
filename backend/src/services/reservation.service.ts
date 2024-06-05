import { Repository } from "typeorm";
import { Request } from "express";
import { 
  S3Client, 
  PutObjectCommand,
 } from "@aws-sdk/client-s3";

import { Reservation } from "../infra/entities/reservation.entity";

export default class ReservationService {

    public constructor(
        private readonly reservationRepository: Repository<Reservation>,
        private readonly s3Client = new S3Client({ region: process.env.AWS_REGION })
    ){ }

    public async createReservation(req: Request, reservation: Reservation) {
        let newReservation = await this.reservationRepository.save(reservation)

        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: `reservation_photos/reservation_${newReservation.id}/${req.file?.originalname}`,
            Body: req.file?.buffer
        }

        await this.s3Client.send(new PutObjectCommand(params))
        const url = `https://s3.${process.env.AWS_REGION}.amazonaws.com/${params.Bucket}/${params.Key}`

        newReservation.photo_url = url
        await this.reservationRepository.save(newReservation)

        return newReservation
    }

    public async fetchReservations() {
        return await this.reservationRepository.find()
    }
}