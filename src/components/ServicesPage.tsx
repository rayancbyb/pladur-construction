import { Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const services = [
  {
    title: 'Aislamiento Térmico',
    description: 'Instalación de sistemas de aislamiento térmico para mejorar la eficiencia energética de su hogar o negocio.',
    features: [
      'Reducción de pérdidas de calor',
      'Ahorro en facturas de energía',
      'Mejora del confort térmico',
      'Materiales de alta calidad'
    ]
  },
  {
    title: 'Aislamiento Acústico',
    description: 'Soluciones para reducir el ruido y mejorar la calidad acústica de sus espacios.',
    features: [
      'Reducción de ruido exterior',
      'Aislamiento entre habitaciones',
      'Materiales insonorizantes',
      'Soluciones personalizadas'
    ]
  },
  {
    title: 'Instalación de Pladur',
    description: 'Trabajos profesionales de instalación de pladur para todo tipo de proyectos.',
    features: [
      'Tabiques y techos',
      'Reformas integrales',
      'Diseño personalizado',
      'Acabados de calidad'
    ]
  },
  {
    title: 'Reformas Integrales',
    description: 'Servicio completo de reformas para viviendas y locales comerciales.',
    features: [
      'Proyectos llave en mano',
      'Coordinación de oficios',
      'Cumplimiento de plazos',
      'Presupuestos detallados'
    ]
  }
];

const ServicesPage = () => {
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
        Nuestros Servicios
      </Typography>
      
      <Grid container spacing={6}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
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
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                {service.title}
              </Typography>
              <Typography paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
                {service.description}
              </Typography>
              <List>
                {service.features.map((feature, featureIndex) => (
                  <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={feature}
                      sx={{ 
                        '& .MuiListItemText-primary': {
                          fontSize: '1rem',
                          lineHeight: 1.5
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage; 