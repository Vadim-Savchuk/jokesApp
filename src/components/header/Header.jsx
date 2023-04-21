import { useState } from 'react';
import { NavLink }  from 'react-router-dom';

import './Header.scss';

import home  from './img/home.png';
import add   from  './img/plus.png';
import about from  './img/information.png';
import user  from  './img/user.png';

function Header() {
    const [ iconst, setIconst ] = useState(false);

    useState(() => {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (width < 590) {
                setIconst(true)
            } else {
                setIconst(false)
            }
    }, [iconst])

    return (
        <header className='header'>
            <nav>
                <ul className='nav-list'>
                    <li><NavLink to='/'        className='button'>{iconst ? <img src={home} alt="Home" /> : 'Головна'}</NavLink></li>
                    <li><NavLink to='/add'     className='button'>{iconst ? <img src={add} alt="Add" /> : 'Додати'}</NavLink></li>
                    <li><NavLink to='/about'   className='button'>{iconst ? <img src={about} alt="About" /> : 'Про нас'}</NavLink></li>
                    <li><NavLink to='/account' className='button button--pos'>{iconst ? <img src={user} alt="User" /> : 'Профіль'}</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
