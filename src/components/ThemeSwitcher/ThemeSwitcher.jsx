import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { setTheme } from 'redux/contacts/themeSlice';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  const themeIcon = currentTheme === 'light' ? (
    <Brightness4Icon className="theme-icon" />
  ) : (
    <Brightness7Icon className="theme-icon" />
  );

  React.useEffect(() => {
    document.documentElement.dataset.theme = currentTheme
    localStorage.setItem('theme', currentTheme)
  }, [ currentTheme ])

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {themeIcon}
    </IconButton>
  );
};

export default ThemeSwitcher;
