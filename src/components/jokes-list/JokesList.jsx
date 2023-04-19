import { useSelector } from 'react-redux';

import Card   from '../card/Card';
import NoDate from '../no-date/NoDate';

import './JokesList.scss';

function JokesList() {
    const jokes = useSelector(state => state.jokes.jokes);

    return (
        <>
            {
                jokes.length === 0 &&
                <NoDate />
            }

            <ul className='jokes'>
                {
                    jokes.map(joke => {
                        return (
                            <Card
                                key={joke.id}
                                id={joke.id}
                                question={joke.question}
                                answer={joke.answer}
                                author={joke.author}
                                isSelected={joke.isSelected}
                                likes={joke.likes}
                                whoLiked={joke.whoLiked}
                            />
                        )
                    })
                }
            </ul>
        </>
    );
}

export default JokesList;
