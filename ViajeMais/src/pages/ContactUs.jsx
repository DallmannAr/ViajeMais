import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Log to fake form(Probably outdated in the new version of MUI)
      console.log('Dados do formulário:', formData);
      
      //Sucess
      setShowSuccess(true);
      
      // Form state = reset 
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      content: 'contato@viajemais.com',
      description: 'Envie-nos um email a qualquer momento',
    },
    {
      icon: <Phone />,
      title: 'Telefone',
      content: '+55 (11) 99999-9999',
      description: 'Ligue para nós durante o horário comercial',
    },
    {
      icon: <LocationOn />,
      title: 'Localização',
      content: 'São Paulo, SP - Brasil',
      description: 'Venha nos visitar em nosso escritório',
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box className="contact-header">
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Entre em Contato
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Estamos aqui para ajudá-lo a planejar sua próxima aventura
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box className="contact-content">
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                  Informações de Contato
                </Typography>
                
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} key={index}>
                      <Card className="contact-info-card">
                        <CardContent>
                          <Box className="contact-info-icon">
                            {info.icon}
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                            {info.title}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5 }}>
                            {info.content}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Card className="contact-form">
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    Envie uma Mensagem
                  </Typography>

                  {showSuccess && (
                    <Alert severity="success" className="success-alert">
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Seu Nome"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          error={Boolean(errors.name)}
                          helperText={errors.name}
                          className="form-input"
                          variant="outlined"
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Seu Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          error={Boolean(errors.email)}
                          helperText={errors.email}
                          className="form-input"
                          variant="outlined"
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Sua Mensagem"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          error={Boolean(errors.message)}
                          helperText={errors.message}
                          className="form-input"
                          variant="outlined"
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          className="form-button"
                        >
                          Enviar Mensagem
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;
