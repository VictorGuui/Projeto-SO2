import multer from "multer";
import { Router } from "express";

import appDataSource from "../infra/data-source";
import { Reservation } from "../infra/entities/reservation.entity";
import ReservationService from "../services/reservation.service";
import ReservationController from "../controller/reservation.controller";

const reservationRouter = Router()

const service = new ReservationService(appDataSource.getRepository(Reservation))
const controller = new ReservationController(service)

const upload = multer({
    storage: multer.memoryStorage(),
})

reservationRouter.post('/create', upload.single('file'), async (req, res) => {
    await controller.createReservationController(req, res)
})

reservationRouter.get('/fetch', async (req, res) => {
    await controller.fetchReservationsController(req, res)
})

export default reservationRouter