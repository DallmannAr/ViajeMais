import  { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Montanhas Majestosas',
      description: 'Paisagem montanhosa banhada pelos raios dourados do sol',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Rio Sereno',
      description: 'Rio cristalino serpenteando entre montanhas cobertas de nuvens',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Ondas do Oceano',
      description: 'Ondas majestosas encontrando a praia em um espetáculo natural',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Floresta de Pinheiros',
      description: 'Floresta densa de pinheiros criando um ambiente místico',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Céu Azul Infinito',
      description: 'Árvores emoldurando montanhas rochosas sob um céu azul perfeito',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Aventura nas Alturas',
      description: 'Vista panorâmica de uma paisagem montanhosa de tirar o fôlego',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Estrada da Aventura',
      description: 'Estrada serpenteante através de paisagens deslumbrantes',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Lago Espelhado',
      description: 'Lago cristalino refletindo perfeitamente a natureza ao redor',
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box>
      {/* Header */}
      <Box className="gallery-header">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Galeria de Destinos
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb:2 }}>
            Uma coleção de momentos inesquecíveis capturados ao redor do mundo
          </Typography>
        </Container>
      </Box>

      {/* Images grids to open modal */}
      <Box className="gallery-grid">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {images.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Box
                  className="gallery-item"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="gallery-image"
                  />
                  <Box className="gallery-overlay">
                    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                      <ZoomIn sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                    <Typography variant="h6" className="gallery-overlay-title">
                      {image.title}
                    </Typography>
                    <Typography variant="body2" className="gallery-overlay-description">
                      {image.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Modal */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
        /* PaperProps has been deprecated but i dont know a good substitute to it, so i hope that dont go off */
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {selectedImage && (
            <Box>
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  color: 'white',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                  },
                  zIndex: 1,
                }}
              >
                <Close />
              </IconButton>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="modal-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  p: 3,
                  borderRadius: '0 0 8px 8px',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1">
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery;