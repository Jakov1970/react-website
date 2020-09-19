import React, {useState} from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import {MdCardTravel} from 'react-icons/md' //Ovde ubacujemo ikonicu iz react-icons biblioteke
import {HiMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    const [click, setClick] = useState(false); //state za klik na meni, da li da prikaze
    
    const handleClick = () => setClick(!click);   

    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'> 
                    <Link to='/' className='navbar-logo'>
                        TRVL <MdCardTravel />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        { click ? <HiMenu /> : <AiOutlineClose />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
