import React, { useState, useRef, useEffect } from 'react'
import './Accord.css'
import Chevron from '../../ressources/icons/chevron-down.svg'

export default function Accord() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    return (
        <div className='accord'>
            <div 
            onClick={toggleState}
            className="accord-visible">
                <h2>Lorem ipsum dolor sit.</h2>
                <img src={Chevron} alt="chevron down" />
            </div>

            <div 
            ref={refHeight} 
            className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}` : '0px'}}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vitae ex et quis hic placeat dolorem autem blanditiis impedit, provident sit recusandae voluptatem vel repellat quo voluptates, cupiditate magnam? Maiores.
                </p>
            </div>
        </div>
    )
}
