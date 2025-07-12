import  { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import {
  FlightTakeoff,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'ContactUs', path: '/contactUs' },
  ];

  return (
    < AppBar position="sticky" className="header-container" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar className="header-toolbar">
          {/* Possível Logo(Fazer no canva)*/}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" className="logo-container">
              <FlightTakeoff className="logo-icon" />
              <Typography variant="h4" className="logo-text">
                ViajeMais
              </Typography>
            </Link>
          </Box>

          {/* Tela padrão */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  className={`nav-link ${isActivePage(item.path) ? 'active' : ''}`}
                  sx={{ color: 'white' }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Se for Mobile(Não esta funcionando pra IOS por motivos indeterminados) */}
          {isMobile && (
            <Box>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={handleMenuClose}
                    sx={{
                      fontWeight: isActivePage(item.path) ? 600 : 400,
                      color: isActivePage(item.path) ? 'primary.main' : 'text.primary',
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;