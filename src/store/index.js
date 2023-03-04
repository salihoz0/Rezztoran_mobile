import { configureStore } from '@reduxjs/toolkit';
import authStore from './authStore';
import favoritesStore from './favoritesStore';
import searchEngineStore from './searchEngineStore';

const store = configureStore({
  reducer: {
    authStore,
    favoritesStore,
    searchEngineStore
  }
})

export default store;
