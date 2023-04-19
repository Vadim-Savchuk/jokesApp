import { useState, useEffect }      from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate }              from 'react-router-dom';

import { addAuthor } from '../../store/jokesSlice';

import './Login.scss';

function Login() {
    const [name, setName] = useState('');
    const author          = useSelector(state => state.jokes.author);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginSubmit = event => {
        event.preventDefault();

        if (name) {
            localStorage.setItem('author', name);

            dispatch(addAuthor(name));
            navigate('/');
        }
    }

    useEffect(() => {
        if(author) return navigate('/');
    }, [author, navigate]);

    return (
        <div className='container'>
            <div className='login'>
                <form className='login-form' onSubmit={loginSubmit}>
                    <label className='title login-form__title'>Авторизація</label>

                    <input
                        type="text"
                        value={name}
                        placeholder="Ім'я"
                        className='login-form__input'
                        onChange={e => setName(e.target.value)}
                    />
                    <button className='button'>Увійти</button>
                </form>
            </div>
        </div>
    );
}

export default Login;