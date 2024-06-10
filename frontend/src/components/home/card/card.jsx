import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { format } from 'date-fns';

export const MeetingCard = ({ reservation }) => {
  const {
    name,
    photo_url,
    location,
    date,
    startTime,
    endTime,
    responsible,
  } = reservation;

  const formattedDate = format(new Date(date), 'dd/MM/yyyy')

  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={photo_url}
        alt={`Foto da ${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Local: </Box>{location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Data: </Box>{formattedDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Hora: </Box>{startTime} - {endTime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" fontWeight="fontWeightBold">Responsável: </Box>{responsible}
        </Typography>
      </CardContent>
    </Card>
  );
};