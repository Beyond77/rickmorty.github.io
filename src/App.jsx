import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Modal from "./components/Modal";
import { getCharacters, getMultipleCharactersByName, incrementPage, decrementPage, setCharacterSearch, setModalVisible, setCharacterInformationModal  } from "./store/slices/rickmorty"

const App = () => {

    const dispatch = useDispatch();
    const { isLoading, characters, page, characterSearch, modalVisible, characterInformationModal } = useSelector(state => state.rickmorty)

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

    if(isLoading){
        return "Loading..."
    }

    return (
        <div className="container">
            <div>
                <h1>Rick And Morty Searcher</h1>
                <form onSubmit={handleSubmit} >

                    <input type="text" onChange={ (e) => dispatch(setCharacterSearch({characterSearch: e.target.value})) } value={characterSearch} />

                </form>
                
                <div className="buttons-container">
                    <button onClick={() => dispatch(decrementPage())} > &lt; </button>
                    <div>{ page }</div>
                    <button onClick={() => dispatch(incrementPage())} > &gt; </button>
                </div>

                <ul className="grid">
                    {
                        characters.map((char) => (
                        <li key={char.id} onClick={() => handleClickCharacter(char) }>
                            <img src={char.image} alt={char.name} />
                            <p className="text-card">{char.name}</p>
                        </li>
                        ))
                    }
                </ul>
               
            </div>
            {

                modalVisible && <Modal characterData={characterInformationModal} />
            }
           
        </div>
    )
}

export default App
