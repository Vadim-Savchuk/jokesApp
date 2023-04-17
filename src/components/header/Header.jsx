import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header() {

    return (
        <header className='header'>
            <NavLink to='/'        className='button'>Головна</NavLink>
            <NavLink to='/add'     className='button'>Додати</NavLink>
            <NavLink to='/account' className='button button--pos'>Профіль</NavLink>
        </header>
    );
}

export default Header;
