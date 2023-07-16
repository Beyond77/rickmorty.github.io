import { configureStore } from '@reduxjs/toolkit'
import { rickmortySlice } from './slices/rickmorty'

export const store = configureStore({
  reducer: {
    rickmorty: rickmortySlice.reducer
  },
})