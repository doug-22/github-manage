import { createSlice } from '@reduxjs/toolkit'
import { FiltersProps } from '../types'

export const initialState: FiltersProps = {
  filterAndOrder: null,
  search: null,
  viewFavorites: false,
  darkMode: false,
  dashboardMode: 'cards',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    handleFilterAndOrder(state, action) {
      state.filterAndOrder = action.payload
    },
    handleSearch(state, action) {
      state.search = action.payload
    },
    handleViewFavorites(state, action) {
      state.viewFavorites = action.payload
    },
    handleDarkMode(state, action) {
      state.darkMode = action.payload
    },
    handleDashboardMode(state, action) {
      state.dashboardMode = action.payload
    },
  },
})

export const {
  handleFilterAndOrder,
  handleSearch,
  handleViewFavorites,
  handleDarkMode,
  handleDashboardMode,
} = filtersSlice.actions

export default filtersSlice.reducer
