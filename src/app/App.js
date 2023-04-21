import { useEffect }                              from 'react';
import { useDispatch, useSelector }               from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { fetchJokes, addAuthor } from '../store/jokesSlice';

import Header   from '../components/header/Header';
import Login    from '../pages/login/Login';
import Home     from '../pages/home/Home';
import AddJoke  from '../pages/add-joke/AddJoke';
import Account  from '../pages/account/Account';
import NotFound from '../pages/not-found/NotFound';
import About    from '../pages/about/About';

import './App.scss';

function App() {
    const dispatch = useDispatch();
    const author = useSelector(state => state.jokes.author);

    useEffect(() => {
        dispatch(addAuthor(localStorage.getItem('author')));
        dispatch(fetchJokes())
    }, [author, dispatch]);

    return (
        <div className='wrapper'>
            <BrowserRouter basename='/jokesApp/'>
                <Header />
                <Routes>
                    <Route path='/login'   element={<Login />} />
                    <Route path='/'        element={author ? <Home />    : <Navigate to="/login"/>} />
                    <Route path='/add'     element={author ? <AddJoke /> : <Navigate to="/login"/>} />
                    <Route path='/about'   element={author ? <About />   : <Navigate to="/login"/>} />
                    <Route path='/account' element={author ? <Account /> : <Navigate to="/login"/>} />
                    <Route path='*'        element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;