import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortData: null,
    filterData: null
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
        }
    }
})

export const { setSort, resetSort, setFilter, resetFilter } = searchEngineStore.actions
export default searchEngineStore.reducer