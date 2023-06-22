// import * as React from 'react';
// import { useSelector } from 'react-redux';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Container from '@mui/material/Container';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useAuth } from 'hooks/hooks';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

// function Header() {
//   const { isLoggedIn } = useAuth();
//   const currentTheme = useSelector(state => state.theme);

//   const themeColor = currentTheme === 'light' ? '#8b54c1' : '#222';

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: themeColor }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
//             <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//              <div style={{ marginRight: 'auto' }}>
//               <Navigation />
//             </div>
//             {isLoggedIn ? <UserMenu /> : <AuthNav />}
//             <ThemeSwitcher />
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }

// export default Header;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuth } from 'hooks/hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { changeTheme } from 'redux/contacts/themeSlice';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const currentTheme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const themeColor = currentTheme === 'light' ? '#8b54c1' : '#222';

  const handleThemeChange = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: themeColor }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <div style={{ marginRight: 'auto' }}>
              <Navigation />
            </div>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <ThemeSwitcher onClick={handleThemeChange} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
