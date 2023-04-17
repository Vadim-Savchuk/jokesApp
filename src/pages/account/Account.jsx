import { useSelector } from 'react-redux';

import './Account.scss';

function Account() {
    const author = useSelector(state => state.jokes.author);

    return (
        <div className='container'>
            <div className='account'>
                <div className='account__desc'>
                    <p className='subtitle'>Ім'я</p>
                    <h3 className="title account__title--margin">{author}</h3>
                    <p className='account__joke'>Над одними жартами я сміюся, над іншими насміхаюсь.</p>
                </div>
            </div>
        </div>
    );
}

export default Account;