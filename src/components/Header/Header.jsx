import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useAuth } from 'hooks/hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { setTheme } from 'redux/contacts/themeSlice';
import { PrivateRoute } from 'components/PrivateRoute';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const currentTheme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#8b54c1' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Box display="flex" alignItems="center">
              <AddIcCallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
              <Navigation />
            </Box>
            {isLoggedIn ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <PrivateRoute
                  path="/contacts"
                  redirectTo="/login"
                  component={<Link to="/contacts">Contacts</Link>}
                />
                <UserMenu />
              </Box>
            ) : (
              <AuthNav />
            )}
            <ThemeSwitcher handleThemeChange={handleThemeChange} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

