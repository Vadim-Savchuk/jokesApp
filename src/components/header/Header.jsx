import { useState } from 'react';
import { NavLink }  from 'react-router-dom';

import './Header.scss';

import home  from './img/home.png';
import add   from  './img/plus.png';
import about from  './img/information.png';
import user  from  './img/user.png';

function Header() {
    const [ width, setWidth ] = useState(false);

    useState(() => {
        window.addEventListener('resize', function() {
            if (window.innerWidth < 590) {
              setWidth(true)
            } else {
                setWidth(false)
            }
        });

    }, [width])

    return (
        <header className='header'>
            <nav>
                <ul className='nav-list'>
                    <li><NavLink to='/'        className='button'>{width ? <img src={home} alt="Home" /> : 'Головна'}</NavLink></li>
                    <li><NavLink to='/add'     className='button'>{width ? <img src={add} alt="Add" /> : 'Додати'}</NavLink></li>
                    <li><NavLink to='/about'   className='button'>{width ? <img src={about} alt="About" /> : 'Про нас'}</NavLink></li>
                    <li><NavLink to='/account' className='button button--pos'>{width ? <img src={user} alt="User" /> : 'Профіль'}</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
