import { rickmortyApi } from "../../../api/rickmortyApi";
import { setCharacters, startLoadingCharacters } from "./rickmortySlice"

export const getCharacters = ( page = 1 ) => {
    return async ( dispatch, getState ) => {
        dispatch(startLoadingCharacters());

        try {
            const { data } = await rickmortyApi.get(`character/?page=${page}`)
            dispatch(setCharacters({ characters: data.results, page, totalPages: data.info.pages}));    
        }catch(err){
            console.log(err);
        }
        
    }
}

export const getMultipleCharactersByName = ( name, page ) => {
    return async (dispatch) => {
        dispatch(startLoadingCharacters());

        try {
            const { data } = await rickmortyApi.get(`character/?page=${page}&name=${name}`)
            dispatch(setCharacters({ characters: data.results, page, totalPages: data.info.pages }))
        }catch(err) {
            dispatch(setCharacters({ characters: [], page, totalPages: 1 }))
            console.log(err);
        }
        
    }
}