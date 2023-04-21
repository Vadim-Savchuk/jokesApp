import { useSelector } from 'react-redux';

import Card   from '../card/Card';
import NoDate from '../no-date/NoDate';

import './JokesList.scss';

function JokesList() {
    const jokes = useSelector(state => state.jokes.jokes);

    return (
        <>
            {jokes.length === 0 &&
                <NoDate />
            }

            <ul className='jokes'>
                {
                    jokes.map(joke => {
                        return (
                            <Card
                                id={joke.id}
                                key={joke.id}
                                likes={joke.likes}
                                author={joke.author}
                                answer={joke.answer}
                                question={joke.question}
                                whoLiked={joke.whoLiked}
                                isSelected={joke.isSelected}
                            />
                        )
                    })
                }
            </ul>
        </>
    );
}

export default JokesList;