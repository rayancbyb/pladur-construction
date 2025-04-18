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

const BeforeLabel = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  zIndex: 3,
}));

const AfterLabel = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  zIndex: 3,
}));

const SliderOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  zIndex: 3,
  pointerEvents: 'none',
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '4px',
  backgroundColor: 'white',
  zIndex: 3,
  pointerEvents: 'none',
  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
}));

const JobCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
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
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 6,
          width: '100%'
        }}>
          {jobs.map((job, index) => (
            <Box key={index}>
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
                  <BeforeAfterContainer>
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
                  </BeforeAfterContainer>
                )}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.description}
                  </Typography>
                </CardContent>
              </JobCard>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default JobsPage; 