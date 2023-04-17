import { useState }                 from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate }              from 'react-router-dom';

import { addNewJoke } from '../../store/jokesSlice';

import './AddJoke.scss';

import done from './img/correct.png';

function AddJoke() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer]     = useState('');
    const [isDone, setIsDone]     = useState(false);
    const author                  = useSelector(state => state.jokes.author);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();

        if (question && answer) {
            const joke = {
                question: question,
                answer: answer,
                author: author,
                likes: 0,
            }
            
            dispatch(addNewJoke(joke));
            setQuestion('');
            setAnswer('');
            setIsDone(true);

            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    }

    return (
        <div className='container'>
            <div className="add-joke">
                <form className='add-form' onSubmit={submit}>
                    <label className='title add-form__title--weight'>Додайте свій жарт.</label>
                    <input
                        type="text"
                        value={question}
                        className='add-form__input'
                        onChange={e => setQuestion(e.target.value)}
                        placeholder='Твої батьки випадково не пірати ?'
                    />
                    <input
                        type="text"
                        value={answer}
                        className='add-form__input'
                        onChange={e => setAnswer(e.target.value)}
                        placeholder='Тоді звідки в них такий скарб.'
                    />
                    <button className='button add-form--width'>Додати</button>
                </form>

                <div className={isDone ? 'result active' : 'result'}>
                    <h2 className='title'>Дякую що долучився</h2>
                    <img src={done} alt="Done" />
                </div>
            </div>
        </div>
    );
}

export default AddJoke;