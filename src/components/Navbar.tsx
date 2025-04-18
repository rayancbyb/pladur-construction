import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(8px)',
  boxShadow: 'none',
  position: 'fixed',
  transition: 'all 0.3s ease',
  '& .MuiButton-root': {
    color: '#ffffff',
    '&:hover': {
      color: '#f9d778',
    },
    '&.active': {
      backgroundColor: '#f9d778',
      color: '#333333',
    }
  },
  '& .logo-text': {
    color: '#ffffff',
    '&:hover': {
      color: '#f9d778'
    }
  },
  '&.scrolled': {
    backgroundColor: 'rgba(51, 51, 51, 0.95)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    '& .MuiButton-root': {
      color: '#ffffff',
      '&:hover': {
        color: '#f9d778',
      },
      '&.active': {
        backgroundColor: '#f9d778',
        color: '#333333',
      }
    },
    '& .logo-text': {
      color: '#ffffff',
      '&:hover': {
        color: '#f9d778'
      }
    }
  }
});

const StyledButton = styled(Button)({
  margin: '0 8px',
  padding: '8px 16px',
  borderRadius: '4px',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#f9d778',
    transform: 'scaleX(0)',
    transformOrigin: '0 50%',
    transition: 'transform .3s ease',
    zIndex: -1,
    borderRadius: '4px',
  },
  '&:hover': {
    color: '#000000',
    backgroundColor: 'transparent',
    '&::before': {
      transform: 'scaleX(1)',
    }
  },
  '&.active': {
    backgroundColor: '#f9d778',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#f9d778',
    }
  }
});

const LogoText = styled(Typography)({
  fontWeight: 700,
  textDecoration: 'none',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  '&:hover': {
    transform: 'scale(1.05)',
    color: '#f9d778',
  }
});

const Navbar = () => {
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledAppBar 
      id="navbar"
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 1.5,
          px: { xs: 2, md: 4 }
        }}>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <LogoText 
              variant="h5" 
              className="logo-text"
            >
              Aislamentos Chairi
            </LogoText>
          </RouterLink>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 1
          }}>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <StyledButton 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Inicio
              </StyledButton>
            </RouterLink>
            <RouterLink to="/about" style={{ textDecoration: 'none' }}>
              <StyledButton 
                className={location.pathname === '/about' ? 'active' : ''}
              >
                Sobre Nosotros
              </StyledButton>
            </RouterLink>
            <RouterLink to="/jobs" style={{ textDecoration: 'none' }}>
              <StyledButton 
                className={location.pathname === '/jobs' ? 'active' : ''}
              >
                Trabajos
              </StyledButton>
            </RouterLink>
            <RouterLink to="/services" style={{ textDecoration: 'none' }}>
              <StyledButton 
                className={location.pathname === '/services' ? 'active' : ''}
              >
                Servicios
              </StyledButton>
            </RouterLink>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar; 