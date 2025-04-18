import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/herramientas.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // Efecto parallax
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(249, 215, 120, 0.2)', // Color dorado semitransparente
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
});

const ContentCard = styled(Paper)(({ theme }) => ({
  p: 4,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[8],
    backgroundColor: theme.palette.background.default,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '& svg': {
    fontSize: 40,
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing(4),
}));

const HomePage = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <HeroSection>
        <ContentWrapper>
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              mb: 4,
              fontSize: { xs: '2rem', md: '3.5rem' }
            }}>
              Aislamentos Chairi
            </Typography>
            <Typography variant="h5" sx={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              mb: 6
            }}>
              Especialistas en aislamientos y construcción en pladur
            </Typography>
          </Container>
        </ContentWrapper>
      </HeroSection>

      <Box sx={{ width: '100%', backgroundColor: 'background.default' }}>
        <Container maxWidth={false} sx={{ py: 8 }}>
          <ContentSection>
            <Grid container spacing={6} justifyContent="center">
              <Grid item xs={12} md={4}>
                <ContentCard elevation={3}>
                  <IconWrapper>
                    <InfoIcon />
                  </IconWrapper>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    Sobre Nosotros
                  </Typography>
                  <Typography sx={{ lineHeight: 1.8, color: 'text.secondary', maxWidth: '90%' }}>
                    Somos una empresa especializada en aislamientos y construcción con pladur, con más de 10 años de experiencia en el sector. Nuestro compromiso es ofrecer soluciones de calidad y profesionalidad.
                  </Typography>
                </ContentCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <ContentCard elevation={3}>
                  <IconWrapper>
                    <BuildIcon />
                  </IconWrapper>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    Nuestros Servicios
                  </Typography>
                  <Typography sx={{ lineHeight: 1.8, color: 'text.secondary', maxWidth: '90%' }}>
                    Ofrecemos servicios completos de aislamiento térmico y acústico, instalación de pladur, y reformas integrales. Garantizamos resultados de alta calidad y máxima satisfacción.
                  </Typography>
                </ContentCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <ContentCard elevation={3}>
                  <IconWrapper>
                    <WorkIcon />
                  </IconWrapper>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                    Trabajos Realizados
                  </Typography>
                  <Typography sx={{ lineHeight: 1.8, color: 'text.secondary', maxWidth: '90%' }}>
                    Hemos completado numerosos proyectos exitosos en viviendas y locales comerciales, siempre manteniendo los más altos estándares de calidad y profesionalidad.
                  </Typography>
                </ContentCard>
              </Grid>
            </Grid>
          </ContentSection>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 