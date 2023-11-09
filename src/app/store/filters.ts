import { createSlice } from '@reduxjs/toolkit'
import { FiltersProps } from '../types'
import Cookie from 'js-cookie'

export const initialState: FiltersProps = {
  filterAndOrder: null,
  search: null,
  viewFavorites: false,
  darkMode: Cookie.get('DARKMODE') === 'true' ?? false,
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
    handleViewFavorites(state) {
      state.viewFavorites = !state.viewFavorites
    },
    handleDarkMode(state) {
      state.darkMode = !state.darkMode
      Cookie.set('DARKMODE', state.darkMode ? 'true' : 'false', {
        secure: true,
        expires: 1,
      })
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
