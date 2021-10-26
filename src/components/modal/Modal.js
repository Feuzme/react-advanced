import React, { useState } from 'react'
import './Modal.css'

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <button className="btn-modal" onClick={toggleModal}>Open</button>
            {modal &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello modal</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus veniam ipsam illum voluptatibus iste a mollitia, illo fuga, odio rem incidunt maxime eveniet, consequatur quo. Officiis eos earum unde.</p>
                            <button className="close-modal"
                                onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
