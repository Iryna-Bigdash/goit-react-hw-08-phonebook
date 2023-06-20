import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/contacts/themeSlice';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {currentTheme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ThemeSwitcher;




