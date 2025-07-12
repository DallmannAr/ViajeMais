
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Explore,
  PhotoCamera,
  LocalAirport,
  Map,
  Group,
  Favorite,
} from '@mui/icons-material';
import CloudsBg from '../components/CloudsBg';

const Home = () => {
  const features = [
    {
      icon: <Explore />,
      title: 'Destinos Únicos',
      description: 'Descubra lugares incríveis e experiências autênticas ao redor do mundo.',
    },
    {
      icon: <PhotoCamera />,
      title: 'Galeria de Sonhos',
      description: 'Veja fotos deslumbrantes que vão despertar sua vontade de viajar.',
    },
    {
      icon: <LocalAirport />,
      title: 'Dicas de Viagem',
      description: 'Conselhos práticos e histórias reais de viajantes experientes.',
    },
    {
      icon: <Map />,
      title: 'Roteiros Detalhados',
      description: 'Planeje suas aventuras com nossos guias completos e atualizados.',
    },
    {
      icon: <Group />,
      title: 'Comunidade',
      description: 'Conecte-se com outros viajantes e compartilhe suas experiências.',
    },
    {
      icon: <Favorite />,
      title: 'Experiências Memoráveis',
      description: 'Crie memórias que durarão para sempre em cada jornada.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="h1" className="hero-title" sx={{ opacity: 0.9, mb:2 }}>
              Explore o Mundo
            </Typography>
            <Typography variant="h4" className="hero-subtitle" sx={{ opacity: 0.9, mb:2 }}>
              Descubra destinos incríveis e viva aventuras inesquecíveis
            </Typography>
            <Button
              component={Link}
              to="/blog"
              variant="contained"
              size="large"
              className="hero-button"
            >
              Começar Aventura
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box className="features-section">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ opacity: 0.9, mb:2 }} className="features-title">
            Por que escolher a ViajeMais?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="feature-card">
                  <CardContent>
                    <Box className="feature-icon">
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" className="feature-title">
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" className="feature-description">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA(Routes)  */}
      <Box className="cta-section">
        <Container maxWidth="lg">
          <Typography variant="h2" className="cta-title">
            Pronto para sua próxima aventura?
          </Typography>
          <Typography variant="h6" className="cta-subtitle">
            Explore nossa galeria de destinos e entre em contato para planejar sua viagem dos sonhos.
          </Typography>
          <Box className="cta-buttons">
            <Button
              component={Link}
              to="/gallery"
              variant="contained"
              size="large"
              className="cta-button-primary"
            >
              Ver Galeria
            </Button>
            <Button
              component={Link}
              to="/contactus"
              variant="outlined"
              size="large"
              className="cta-button-secondary"
            >
              Fale Conosco
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
