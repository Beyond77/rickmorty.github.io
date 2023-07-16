import { rickmortyApi } from "../../../api/rickmortyApi";
import { setCharacters, startLoadingCharacters } from "./rickmortySlice"

export const getCharacters = ( page = 1 ) => {
    return async ( dispatch, getState ) => {
        dispatch(startLoadingCharacters());

        const { data } = await rickmortyApi.get(`character/?page=${page}`)
        dispatch(setCharacters({ characters: data.results, page, totalPages: data.info.pages}));

    }
}

export const getMultipleCharactersByName = ( name, page ) => {
    return async (dispatch) => {
        dispatch(startLoadingCharacters());

        const { data } = await rickmortyApi.get(`character/?page=${page}&name=${name}`)
        dispatch(setCharacters({ characters: data.results, page, totalPages: data.info.pages }))
    }
}