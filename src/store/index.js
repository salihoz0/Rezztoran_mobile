import { configureStore } from '@reduxjs/toolkit';
import authStore from './authStore';
import favoritesStore from './favoritesStore';

const store = configureStore({
  reducer: {
    authStore,
    favoritesStore
  }
})

export default store;
