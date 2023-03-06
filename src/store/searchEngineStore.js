import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortData: null,
    filterData: null,
    numOfPeople: null,
    reservationDate: null,
}

const searchEngineStore = createSlice({
    name: 'searchEngineStore',
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.sortData = action.payload.sortData || state.sortData
        },
        resetSort: (state) => {
            state.sortData = null
        },
        setFilter: (state, action) => {
            state.filterData = action.payload.filterData || state.filterData
        },
        resetFilter: (state) => {
            state.filterData = null
        },
        setNumOfPeople: (state, action) => {
            state.numOfPeople = action.payload.numOfPeople || state.numOfPeople
        },
        resetNumOfPeople: (state) => {
            state.numOfPeople = null
        },
        setReservationDate: (state, action) => {
            state.reservationDate = action.payload.reservationDate || state.reservationDate
        },
        resetReservationDate: (state) => {
            state.reservationDate = null
        },
        resetSearchEngineStore: (state) => {
            state.sortData = null
            state.filterData = null
            state.numOfPeople = null
            state.reservationDate = null
        }
    }
})

export const { setSort, resetSort, setFilter, resetFilter, setNumOfPeople, resetNumOfPeople, resetSearchEngineStore, setReservationDate, resetReservationDate } = searchEngineStore.actions
export default searchEngineStore.reducer