import { useDispatch, useSelector } from 'react-redux';

import { addSelected, liked } from '../../store/jokesSlice';

import './Card.scss';

function Card({ question, answer, author, id, isSelected, likes, whoLiked, joke }) {
    const dispatch     = useDispatch();
    const acountAuthor = useSelector(state => state.jokes.author);
    const youLiked     = whoLiked.includes(acountAuthor);

    const cardHandler = (e, id) => {
        if (e.target.closest('.card__add-to-selected')) {
            dispatch(addSelected(id))
            return
        }
        if(e.target.closest('.card__like')) {
            dispatch(liked(id))
            return
        }
    }

    return (
        <li className='card' onClick={(e) => cardHandler(e, id)}>
            <h3 className='card__title'>{question}</h3>
            <p className='card__text'>{answer}</p>
            <div className='card__desc'>
                <h3 className='card__title'>Автор {author}</h3>
                <p className='card__text'>Кількість вподобань {likes}<span className={youLiked ? 'card__like active' : 'card__like'}>&#10084;</span></p>
                <button className={isSelected ? 'card__add-to-selected active' : 'card__add-to-selected'}>&#9733;</button>
            </div>
        </li>
    );
}

export default Card;