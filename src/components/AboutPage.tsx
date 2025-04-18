import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ 
          fontWeight: 'bold',
          mb: 6,
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '3rem' }
        }}
      >
        Sobre Nosotros
      </Typography>
      
      <Grid container spacing={6} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ 
            p: 4,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Nuestra Historia
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
              Aislamentos Chairi nació con la visión de proporcionar soluciones de alta calidad en aislamientos y construcción con pladur. Desde nuestros inicios, nos hemos comprometido con la excelencia y la satisfacción del cliente.
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              Con más de 10 años de experiencia en el sector, hemos desarrollado un profundo conocimiento de las necesidades del mercado y las mejores prácticas en construcción.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ 
            p: 4,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Nuestros Valores
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ lineHeight: 1.8 }}>
                • Calidad: Nos comprometemos a utilizar los mejores materiales y técnicas.
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                • Profesionalismo: Nuestro equipo está altamente cualificado y en constante formación.
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                • Sostenibilidad: Implementamos prácticas respetuosas con el medio ambiente.
              </Typography>
              <Typography sx={{ lineHeight: 1.8 }}>
                • Transparencia: Mantenemos una comunicación clara y honesta con nuestros clientes.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage; 