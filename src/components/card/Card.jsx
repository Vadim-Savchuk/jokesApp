import { useDispatch, useSelector } from 'react-redux';

import { addSelected, liked } from '../../store/jokesSlice';

import './Card.scss';

function Card({ question, answer, author, id, isSelected, likes, whoLiked }) {
    const dispatch     = useDispatch();
    const acountAuthor = useSelector(state => state.jokes.author);
    const youLiked     = whoLiked.includes(acountAuthor);

    const cardHandler = (e, id) => {
        let cardAddSelect = e.target.closest('.card__add-to-selected');

        if (cardAddSelect) {
            dispatch(addSelected(id))
            return
        }
        dispatch(liked(id))
    }

    return (
        <li className='card' onClick={(e) => cardHandler(e, id)}>
            <h3 className='card__title'>{question}</h3>
            <p className='card__text'>{answer}</p>
            <div className='card__desc'>
                <h3 className='card__title'>Автор {author}</h3>
                <p className='card__text'>Кількість вподобань {likes}<span className={youLiked ? 'card__like active' : 'card__like'}>&hearts;</span></p>
                <button className={isSelected ? 'card__add-to-selected active' : 'card__add-to-selected'}>&#9733;</button>
            </div>
        </li>
    );
}

export default Card;