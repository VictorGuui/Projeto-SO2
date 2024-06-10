import React, { useEffect, useState } from 'react';
import {
  CssBaseline,
  Container,
  Grid,
  Box,
} from '@mui/material';
import { MeetingCard } from './card/card';
import { Header } from '../header/header';

export const Home = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://18.204.218.70:3000/reservation/fetch'); // Ajuste a URL conforme necessário
        if (response.ok) {
          const data = await response.json();
          setReservations(data);
        } else {
          console.error('Failed to fetch reservations');
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header
        title="Reservas Feitas"
        buttonText="Criar Nova Reserva"
        buttonTo="/form"
      />
      <Container>
        <Box sx={{ flexGrow: 1, marginTop: 4 }}>
          <Grid container spacing={3} justifyContent="center">
            {reservations.map((reservation, index) => (
              <Grid item key={index}>
                <MeetingCard
                  reservation={reservation}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
