import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  totalPages: 1,
  characters: [],
  isLoading: false,
  characterSearch: "",
  modalVisible: false,
  characterInformationModal: {}
}

export const rickmortySlice = createSlice({
  name: 'rickmorty',
  initialState,
  reducers: {
    startLoadingCharacters: (state) => {
        state.isLoading = true;
    },
    setCharacters: (state, action) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.characters = action.payload.characters;
        state.totalPages = action.payload.totalPages
    },
    incrementPage: (state) => {
        if(state.page < state.totalPages){
            state.page += 1;
        }
    },
    decrementPage: (state) => {
      if(state.page > 1){
        state.page -= 1;
      }
    },
    setCharacterSearch: (state, action ) => {
      state.characterSearch = action.payload.characterSearch;
    },
    setModalVisible: (state, action) => {
      state.modalVisible = action.payload.modalVisible;
    },
    setCharacterInformationModal: (state, action) => {
      state.characterInformationModal = action.payload.characterInformationModal;
    }
  },
})

export const { startLoadingCharacters, setCharacters, incrementPage, decrementPage, setCharacterSearch, setModalVisible, setCharacterInformationModal } = rickmortySlice.actions