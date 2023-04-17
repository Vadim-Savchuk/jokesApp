import { useEffect }                              from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector }               from 'react-redux';

import { fetchJokes, addAuthor } from '../store/jokesSlice';

import Header   from '../components/header/Header';
import Login    from '../pages/login/Login';
import Home     from '../pages/home/Home';
import AddJoke  from '../pages/add-joke/AddJoke';
import Account  from '../pages/account/Account';
import NotFound from '../pages/not-found/NotFound';

import './App.scss';

function App() {
    const dispatch = useDispatch();
    const author   = useSelector(state => state.jokes.author);

    useEffect(() => {
        dispatch(addAuthor(localStorage.getItem('author')));
        dispatch(fetchJokes())
    }, [author]);

    return (
        <div className='wrapper'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/login'   element={<Login />}/>
                    <Route path='/'        element={author ? <Home /> : <Navigate to="/login" />} />
                    <Route path='/add'     element={<AddJoke />} />
                    <Route path='/account' element={<Account />} />

                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div> 
        
    );
}

export default App;