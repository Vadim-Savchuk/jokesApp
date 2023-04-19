import { useSelector } from 'react-redux';

import Card from '../../components/card/Card';

import './Account.scss';

function Account() {
    const author = useSelector(state => state.jokes.author);
    const selectJokes = useSelector(state => state.jokes.jokes);

    const filtered = selectJokes.filter(joke => joke.isSelected === true)

    return (
        <div className='container'>
            <div className='account'>
                <div className='account__desc'>
                    <p className='subtitle'>Ім'я</p>
                    <h3 className="title account__title--margin">{author}</h3>
                    <p className='account__joke'>Над одними жартами я сміюся, над іншими насміхаюсь.</p>
                </div>
                <ul className='i-am-like'>
                    <li className='subtitle i-am-like__subtitle'>Вподобанні</li>
                    {
                        filtered.length === 0 &&
                        <li className='subtitle i-am-like__subtitle'>Тут покищо пусто</li>
                    }

                    {
                        filtered.map(joke => {
                            return <Card
                                key={joke.id}
                                id={joke.id}
                                question={joke.question}
                                answer={joke.answer}
                                author={joke.author}
                                isSelected={joke.isSelected}
                                likes={joke.likes}
                                whoLiked={joke.whoLiked}

                            />
                        })
                    }

                </ul>
            </div>
        </div>
    );
}

export default Account;