import { useSelector } from 'react-redux';

import JokesList    from '../../components/jokes-list/JokesList';
import Loader       from '../../components/loader/Loader';
import Info         from '../../components/info/Info';

import './Home.scss';

function Home() {
    const { status, error } = useSelector(state => state.jokes);
    
    return (
        <div className="container">
            <div className='home'>
                
                {status === 'loading' ? <Loader /> : <JokesList />}
                {error && <Info text={'Сталась помилка. \n Спробуйте будь ласка пізніше.'} />}
            </div>
        </div>
    );
}

export default Home;