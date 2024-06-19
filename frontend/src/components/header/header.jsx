import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  Toolbar,
  Typography,
  Button,
  TextField,
  AppBar
} from '@mui/material';

export const Header = ({ title, buttonText, buttonTo, searchTerm, handleSearch }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/');
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <TextField
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Digite um nome..."
              variant="outlined"
              size="small"
              sx={{ backgroundColor: 'white', borderRadius: 1, marginRight: 2 }}
            />
            <Button color="inherit" component={Link} to={buttonTo}>
              {buttonText}
            </Button>
            <Button color="inherit" onClick={handleLogout}>Sair</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
