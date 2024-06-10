import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Grid,
  Button,
  TextField,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../header/header';

export const Form = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [responsible, setResponsible] = useState('');
  const [reason, setReason] = useState('');
  const [info, setInfo] = useState('');
  const [guests, setGuests] = useState('');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    formData.append('location', location);
    formData.append('date', date);
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);
    formData.append('responsible', responsible);
    formData.append('reason', reason);
    formData.append('info', info);
    formData.append('guests', guests)

    const request = fetch('http://18.204.218.70:3000/reservation/create', {
        method: 'POST',
        body: formData
    })

    const response = await request

    if (response.status === 201) {
        toast.success('Reserva criada com sucesso!');
        setName('');
        setLocation('');
        setDate('');
        setStartTime('');
        setEndTime('');
        setResponsible('');
        setReason('');
        setInfo('');
        setGuests('');
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
          }
      } else if (response.status === 400){
        toast.error('Insira todos os dados.');
      } else {
        toast.error('Erro ao criar reunião')
      }
  };

    return (
        <><Header 
            title="Criar Nova Reserva"
            buttonText="Voltar para Home"
            buttonTo="/home"
        />
        <Container>
            <form onSubmit={handleSubmit}>
                <br></br>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nome da Sala"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="file"
                            label="Foto Ilustrativa da Sala"
                            fullWidth
                            onChange={handleFileChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Local da Sala"
                            fullWidth
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="date"
                            label="Data de Uso"
                            fullWidth
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="time"
                            label="Hora Início do Uso"
                            fullWidth
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="time"
                            label="Hora Final do Uso"
                            fullWidth
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Responsável pelo Uso"
                            fullWidth
                            value={responsible}
                            onChange={(e) => setResponsible(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Motivo do Uso"
                            fullWidth
                            multiline
                            rows={2}
                            value={reason}
                            onChange={(e) => setReason(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Informações em Geral"
                            fullWidth
                            multiline
                            rows={2}
                            value={info}
                            onChange={(e) => setInfo(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Convidados"
                            fullWidth
                            multiline
                            rows={2}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Criar Reserva</Button>
                    </Grid>
                </Grid>
            </form>
            <ToastContainer 
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container></>
    )
}