import { useSelector } from 'react-redux';

import Card from '../card/Card';

import './JokesList.scss';

function JokesList() {
    const jokes = useSelector(state => state.jokes.jokes);

    return (
        <ul className='jokes'>
            {
                jokes.map((joke, index) => {
                    return (
                        <Card
                            key={index}
                            question={joke.question}
                            answer={joke.answer}
                            author={joke.author}
                            likes={joke.likes}
                        />
                    )
                })
            }
        </ul>
    );
}

export default JokesList;
