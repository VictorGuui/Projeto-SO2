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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReservations, setFilteredReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://174.129.177.78:3000/reservation/fetch'); // Ajuste a URL conforme necessário
        if (response.ok) {
          const data = await response.json();
          setReservations(data);
          setFilteredReservations(data);
        } else {
          console.error('Failed to fetch reservations');
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === '') {
      setFilteredReservations(reservations);
    } else {
      const filteredData = reservations.filter((reservation) =>
        reservation.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredReservations(filteredData);
    }
  };

  return (
    <>
      <CssBaseline />
      <Header
        title="Reservas Feitas"
        buttonText="Criar Nova Reserva"
        buttonTo="/form"
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <Container>
        <Box sx={{ flexGrow: 1, marginTop: 4 }}>
          <Grid container spacing={3} justifyContent="center">
            {filteredReservations.map((reservation, index) => (
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
