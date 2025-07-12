
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import {
  FlightTakeoff,
  Instagram,
  Facebook,
  Twitter,
  YouTube,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
        color: 'white',
        py: 6,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo e descrição */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FlightTakeoff sx={{ mr: 1, fontSize: 30 }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                ViajeMais
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: '#BDC3C7' }}>
              Descubra o mundo através de aventuras incríveis e experiências únicas. 
              Sua próxima jornada começa aqui!
            </Typography>
          </Grid>

          {/* Links rápidos */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Links Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/blog" color="inherit" underline="hover">
                Blog de Viagens
              </Link>
              <Link href="/galeria" color="inherit" underline="hover">
                Galeria
              </Link>
              <Link href="/contato" color="inherit" underline="hover">
                Contato
              </Link>
            </Box>
          </Grid>

          {/* Redes sociais */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Siga-nos
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#3b5998' }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: '#E4405F' }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: '#1DA1F2' }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: '#FF0000' }}>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid #34495E',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#BDC3C7' }}>
            © {new Date().getFullYear()} ViajeMais. Todos os direitos reservados. 
            Desenvolvido com ❤️ para inspirar suas aventuras.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;