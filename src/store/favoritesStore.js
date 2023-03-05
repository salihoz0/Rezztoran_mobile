import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            const { id, title, city, price, imgURL } = action.payload;
            const favorite = { id, title, city, price, imgURL };
            state.push(favorite);
        },
        removeFavorite: (state, action) => {
            const { id } = action.payload;
            return state.filter(favorite => favorite.id !== id);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
