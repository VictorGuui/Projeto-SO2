import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export const Header = ({ title, buttonText, buttonTo }) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authenticated')
        navigate('/')
    }

    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Button color="inherit" component={Link} to={buttonTo}>
                            {buttonText}
                        </Button>
                        <Button color="inherit" onClick={handleLogout}>Sair</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}