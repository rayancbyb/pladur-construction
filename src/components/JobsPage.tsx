import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const jobs = [
  {
    title: 'Reforma Integral de Vivienda',
    description: 'Reforma completa de vivienda con instalación de pladur y aislamiento térmico.',
    beforeImage: '/jobs/antes1.png',
    afterImage: '/jobs/despues1.png',
  },
  {
    title: 'Local Comercial',
    description: 'Instalación de pladur y aislamiento acústico en local comercial.',
    beforeImage: '/jobs/antes.jpg',
    afterImage: '/jobs/despues.jpg',
  },
  {
    title: 'Oficinas Corporativas',
    description: 'Proyecto de aislamiento y construcción en pladur para oficinas.',
    beforeImage: '/jobs/antes.jpg',
    afterImage: '/jobs/despues.jpg',
  },
];

const BeforeAfterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '100%', // Será reemplazado por el padding dinámico
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#f5f5f5',
}));

const VerticalBeforeAfterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '150%',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#f5f5f5',
}));

const BeforeImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
});

const AfterImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 2,
});

const SliderContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '4px',
  height: '100%',
  backgroundColor: 'white',
  cursor: 'ew-resize',
  zIndex: 3,
  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '0 0 15px rgba(0,0,0,0.4)',
  },
  '&::after': {
    content: '"↔"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    color: 'rgba(0,0,0,0.5)',
  }
});

const SliderOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.1)',
  zIndex: 2,
});

const JobCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const BeforeLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  left: 16,
  padding: '4px 12px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.875rem',
  fontWeight: 500,
  zIndex: 3,
}));

const AfterLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  padding: '4px 12px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.875rem',
  fontWeight: 500,
  zIndex: 3,
}));

const JobsPage = () => {
  const theme = useTheme();
  const [sliderValues, setSliderValues] = React.useState<{ [key: number]: number }>({});
  const [imageRatios, setImageRatios] = React.useState<{ [key: number]: number }>({});

  const handleSliderChange = (index: number) => (event: Event, newValue: number | number[]) => {
    setSliderValues(prev => ({
      ...prev,
      [index]: newValue as number,
    }));
  };

  const handleImageLoad = (index: number, isBeforeImage: boolean) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    const ratio = (img.naturalHeight / img.naturalWidth) * 100;
    
    if (isBeforeImage) {
      setImageRatios(prev => ({
        ...prev,
        [index]: ratio,
      }));
    }
  };

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh',
      backgroundColor: 'background.default', 
      py: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="xl" sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
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
          Trabajos Realizados
        </Typography>
        
        <Grid container spacing={6} justifyContent="center">
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard>
                {index === 0 ? (
                  <VerticalBeforeAfterContainer>
                    <BeforeLabel>Antes</BeforeLabel>
                    <AfterLabel>Después</AfterLabel>
                    <img
                      src={job.beforeImage}
                      alt=""
                      style={{ display: 'none' }}
                      onLoad={handleImageLoad(index, true)}
                    />
                    <BeforeImage 
                      sx={{ 
                        backgroundImage: `url(${job.beforeImage})`,
                        filter: 'brightness(1.1) contrast(1.1)',
                      }} 
                    />
                    <AfterImage 
                      sx={{ 
                        backgroundImage: `url(${job.afterImage})`,
                        filter: 'brightness(1.1) contrast(1.1)',
                        clipPath: `inset(0 0 0 ${sliderValues[index] || 50}%)`,
                        left: 0,
                        width: '100%',
                      }} 
                    />
                    <SliderOverlay 
                      sx={{ 
                        width: `${sliderValues[index] || 50}%`,
                        left: 0,
                      }} 
                    />
                    <SliderContainer 
                      sx={{ 
                        left: `${sliderValues[index] || 50}%`,
                        transform: 'translateX(-2px)',
                      }} 
                    />
                    <Slider
                      value={sliderValues[index] || 50}
                      onChange={handleSliderChange(index)}
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 4,
                        '& .MuiSlider-thumb': {
                          width: 40,
                          height: 40,
                          backgroundColor: 'transparent',
                          '&:hover': {
                            boxShadow: 'none',
                          },
                        },
                        '& .MuiSlider-track': {
                          display: 'none',
                        },
                        '& .MuiSlider-rail': {
                          display: 'none',
                        },
                      }}
                    />
                  </VerticalBeforeAfterContainer>
                ) : (
                  <Box sx={{ 
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: imageRatios[index] ? `${imageRatios[index]}%` : '75%',
                    overflow: 'hidden',
                    borderRadius: theme.shape.borderRadius,
                    marginBottom: theme.spacing(2),
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#f5f5f5',
                  }}>
                    <BeforeLabel>Antes</BeforeLabel>
                    <AfterLabel>Después</AfterLabel>
                    <img
                      src={job.beforeImage}
                      alt=""
                      style={{ display: 'none' }}
                      onLoad={handleImageLoad(index, true)}
                    />
                    <BeforeImage 
                      sx={{ 
                        backgroundImage: `url(${job.beforeImage})`,
                        filter: 'brightness(1.1) contrast(1.1)',
                      }} 
                    />
                    <AfterImage 
                      sx={{ 
                        backgroundImage: `url(${job.afterImage})`,
                        filter: 'brightness(1.1) contrast(1.1)',
                        clipPath: `inset(0 0 0 ${sliderValues[index] || 50}%)`,
                        left: 0,
                        width: '100%',
                      }} 
                    />
                    <SliderOverlay 
                      sx={{ 
                        width: `${sliderValues[index] || 50}%`,
                        left: 0,
                      }} 
                    />
                    <SliderContainer 
                      sx={{ 
                        left: `${sliderValues[index] || 50}%`,
                        transform: 'translateX(-2px)',
                      }} 
                    />
                    <Slider
                      value={sliderValues[index] || 50}
                      onChange={handleSliderChange(index)}
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 4,
                        '& .MuiSlider-thumb': {
                          width: 40,
                          height: 40,
                          backgroundColor: 'transparent',
                          '&:hover': {
                            boxShadow: 'none',
                          },
                        },
                        '& .MuiSlider-track': {
                          display: 'none',
                        },
                        '& .MuiSlider-rail': {
                          display: 'none',
                        },
                      }}
                    />
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {job.title}
                  </Typography>
                  <Typography sx={{ lineHeight: 1.8 }}>
                    {job.description}
                  </Typography>
                </CardContent>
              </JobCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobsPage; 