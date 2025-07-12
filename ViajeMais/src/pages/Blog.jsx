import  { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Refresh } from '@mui/icons-material';
import axios from 'axios';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        console.log('Fetching travel articles from Dev.to API...');
        
        const response = await axios.get('https://dev.to/api/articles?tag=travel&per_page=12');
        
        console.log('Articles fetched successfully:', response.data);
        setArticles(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Erro ao carregar artigos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const getDefaultImage = () => {
    return 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  if (loading) {
    return (
      <Box>
        {/* Header */}
        <Box className="blog-header">
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ fontWeight: 600, mb: 2 }}>
              Blog de Viagens
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Histórias, dicas e inspirações para suas próximas aventuras
            </Typography>
          </Container>
        </Box>

        {/* Loading */}
        <Box className="loading-container">
          <CircularProgress size={60} className="loading-spinner" />
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        {/* Header */}
        <Box className="blog-header">
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ fontWeight: 600, mb: 2 }}>
              Blog de Viagens
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Histórias, dicas e inspirações para suas próximas aventuras
            </Typography>
          </Container>
        </Box>

        {/* Error */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box className="error-container">
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
            <Button
              variant="contained"
              startIcon={<Refresh />}
              onClick={fetchArticles}
              className="error-button"
            >
              Tentar Novamente
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box className="blog-header">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Blog de Viagens
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Histórias, dicas e inspirações para suas próximas aventuras
          </Typography>
        </Container>
      </Box>

      {/* Articles Grid */}
      <Box className="blog-grid">
        <Container maxWidth="lg">
          {articles.length === 0 ? (
            <Typography variant="h6" textAlign="center" color="text.secondary">
              Nenhum artigo encontrado.
            </Typography>
          ) : (
            <Grid container spacing={4}>
              {articles.map((article) => (
                <Grid item xs={12} md={6} lg={4} key={article.id}>
                  <Card className="blog-card fade-in">
                    <CardMedia
                      component="img"
                      className="blog-image"
                      image={article.cover_image || getDefaultImage()}
                      alt={article.title}
                    />
                    <CardContent className="blog-content">
                      {/* Tags */}
                      <Box className="blog-tags">
                        {article.tag_list.slice(0, 3).map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            size="small"
                            className="blog-tag"
                          />
                        ))}
                      </Box>

                      {/* Title */}
                      <Typography variant="h6" className="blog-title">
                        {truncateText(article.title, 80)}
                      </Typography>

                      {/* Description */}
                      <Typography variant="body2" className="blog-description">
                        {truncateText(article.description || 'Clique para ler o artigo completo.', 120)}
                      </Typography>

                      {/* Meta */}
                      <Box className="blog-meta">
                        <Typography variant="caption">
                          Por {article.user.name}
                        </Typography>
                        <Typography variant="caption">
                          {formatDate(article.published_at)}
                        </Typography>
                      </Box>

                      {/* Button */}
                      <Button
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        className="blog-button"
                        size="small"
                      >
                        Ler Mais
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Blog;