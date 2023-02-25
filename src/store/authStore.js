import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  myToken: '',
  myDetails: {},
}

export const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.myToken = action.payload.myToken;
      state.myDetails = action.payload.myDetails;
      state.isLoggedIn = true;
    },
    resetAuth: (state) => {
      state.value.myToken = '';
      state.value.isLoggedIn = false;
      state.value.myDetails = {};
    },
  },
});

export const {setAuth, resetAuth} = authStore.actions;
export default authStore.reducer;
