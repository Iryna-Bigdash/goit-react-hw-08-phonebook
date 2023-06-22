import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    changeTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;