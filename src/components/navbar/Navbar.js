import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav>
            {(toggleMenu || largeur > 700) &&
                <ul className="liste">
                    <li className="items">Acceuil</li>
                    <li className="items">Service</li>
                    <li className="items">Contact</li>
                    <li className="items">Plan du site</li>
                </ul>
            }
            <button
                onClick={toggleNav}
                className="btn">BTN</button>
        </nav>
    )
}
