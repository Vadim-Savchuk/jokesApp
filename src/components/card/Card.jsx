import './Card.scss';

function Card({ question, answer, author, likes }) {

    return (
        <li className='card'>
            <h3 className='card__title'>{question}</h3>
            <p className='card__text'>{answer}</p>
            <div className='card__desc'>
                <h3 className='card__title'>Автор {author}</h3>
            </div>
        </li>
    );
}

export default Card;