import { useSelector } from 'react-redux';

import JokesList from '../../components/jokes-list/JokesList';
import Loader    from '../../components/loader/Loader';

import './Home.scss';

function Home() {
    const {status, error} = useSelector(state => state.jokes);
    
    return (
        <div className="container">
            <section className='home'>
                {status === 'loading' ? <Loader /> : <JokesList />}
                {error && <h1 className='big-title'>{error}</h1>}
            </section>
        </div>
    );
}

export default Home;