import { useDispatch } from 'react-redux';
import { setModalVisible } from '../store/slices/rickmorty';

const Modal = ({ characterData, modalVisible }) => {
    const dispatch = useDispatch();
    const { name, gender, image, location, species, status } = characterData;
    return (
        <div id="modal" className="modal-mask" closing={modalVisible} >
            <div className="modal-container">
                <button className="modal-exit-button" onClick={() => dispatch(setModalVisible({modalVisible: false}))}>X</button>
                <div className="modal-content">
                    <div>
                        <p>Name: { name }</p>
                        <p>Gender: { gender }</p>
                        <p>Location: { location.name } </p>
                        <p>Species: { species }</p>
                        <p>Status: { status }</p>   
                    </div>
                     <img className="image-round-full" src={image} alt={name} />
                </div>
                
            </div>
        </div>
    )
}

export default Modal
