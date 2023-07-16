import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CharactersContainer from "./components/CharactersContainer";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";
import { getCharacters, getMultipleCharactersByName, setCharacterSearch, setModalVisible, setCharacterInformationModal  } from "./store/slices/rickmorty"

const App = () => {

    const dispatch = useDispatch();
    const { characters, page, characterSearch, modalVisible, characterInformationModal } = useSelector(state => state.rickmorty)

    useEffect(() => {
        if(!characterSearch.length === 0){
            dispatch( getCharacters(page));
        }else {
            dispatch(getMultipleCharactersByName( characterSearch, page ))
        }
    }, [page])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getMultipleCharactersByName( characterSearch, 1 ));
    }

    const handleClickCharacter = (char) => {
        dispatch(setModalVisible({ modalVisible: true }));
        dispatch(setCharacterInformationModal({characterInformationModal: char}));
    }

    return (
        <div className="container">
            <h1 className="header">Rick And Morty Searcher</h1>
            <div>
                <form className="search-form" onSubmit={handleSubmit} >
                    <input type="text" name="Search" id="Search" placeholder="Character" onChange={ (e) => dispatch(setCharacterSearch({characterSearch: e.target.value})) } value={characterSearch} />
                </form>
                
                <Pagination page={page}/>

                <CharactersContainer characters={characters} handleClickCharacter={handleClickCharacter}/>

                <Pagination page={page}/>
               
            </div>

            {

                modalVisible && <Modal characterData={characterInformationModal} modalVisible={modalVisible}/>
            }
           
        </div>
    )
}

export default App
