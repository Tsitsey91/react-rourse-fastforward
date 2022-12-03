
// The component/function has to start with capital letter
//so that when we call it as an html element, it can be 
// differentiated from the built-in html elements

//The function parameter (we name "props" because this concept of React 
//is named that way...but we can name it whatever we want)
//is a JS object which contains all the attributes added in the html
//element(they are available as key/value pairs)
import {useState} from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";

// props are important for building re-usable componetns
// state is important for changing the UI dynamically

function Todo(props) {

    const [modalIsOpen, setModalToOpen] = useState(false);

    function openModal() {
        setModalToOpen(true)
    }

    function closeModal(){
        setModalToOpen(false)
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={openModal}>
                    Delete
                </button>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModal} onConfirm={closeModal}/> : null}  {/*conditional rendering of Modal componnet*/}
            {modalIsOpen && <Backdrop onClick={closeModal}/>} {/*same thing with diff syntax*/}
        </div>
    )
}

export default Todo