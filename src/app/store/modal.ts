import { createSlice } from '@reduxjs/toolkit'
import { ModalProps } from '../types'

interface ModalsTitle {
  payload: 'Delele repository'
}

export const initialState: ModalProps = {
  title: null,
  isOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleOpenModal(state, action: ModalsTitle) {
      state.isOpen = !state.isOpen
      state.title = action.payload
    },
    handleCloseModal(state) {
      state.isOpen = !state.isOpen
      state.title = null
    },
  },
})

export const { handleOpenModal, handleCloseModal } = modalSlice.actions

export default modalSlice.reducer
