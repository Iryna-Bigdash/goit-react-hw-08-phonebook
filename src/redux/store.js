import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filtersSlice';
import themeReducer from './contacts/themeSlice';
import postsReducer from '../features/post/postSlice'
import usersReducer from 'features/users/usersSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer,
    theme: themeReducer,
    posts: postsReducer,
    users: usersReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);


