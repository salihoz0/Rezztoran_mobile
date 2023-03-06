import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_ADDRESS = {
    country: {
        emoji: '🇹🇷',
        id: 225,
        iso2: 'TR',
        latitude: 39,
        longitude: 35,
        name: 'Turkey',
        nativeName: 'Türkiye',
        phoneCode: '90',
    },
    state: undefined,
    city: undefined,
    district: undefined,
}

const initialState = {
    address: DEFAULT_ADDRESS,
    sortData: null,
    filterData: null,
    numOfPeople: null,
    reservationDate: null,
}

const searchEngineStore = createSlice({
    name: 'searchEngineStore',
    initialState,
    reducers: {
        setAddressStore: (state, action) => {
            state.address.country = state.address.country
            state.address.state = action.payload.state === undefined ? undefined : action.payload.state
            state.address.city = action.payload.city === undefined ? undefined : action.payload.city
            state.address.district = action.payload.district === undefined ? undefined : action.payload.district
        },
        resetAddressStore: (state, action) => {
            state.address.country = state.address.country
            state.address.state = undefined
            state.address.city = undefined
            state.address.district = undefined
        },
        setStateStore: (state, action) => {
            state.address.state = action.payload.state === undefined ? undefined : action.payload.state
            state.stateId = action.payload.stateId || undefined
        },
        setCityStore: (state, action) => {
            state.address.city = action.payload.city === undefined ? undefined : action.payload.city
            state.cityId = action.payload.cityId || undefined
        },
        setDistrictStore: (state, action) => {
            state.address.district = action.payload.district === undefined ? undefined : action.payload.district
        },
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

export const {
    setAddressStore,
    resetAddressStore,
    setStateStore,
    setCityStore,
    setDistrictStore,
    setSort,
    resetSort,
    setFilter,
    resetFilter,
    setNumOfPeople,
    resetNumOfPeople,
    resetSearchEngineStore,
    setReservationDate,
    resetReservationDate } = searchEngineStore.actions
export default searchEngineStore.reducer