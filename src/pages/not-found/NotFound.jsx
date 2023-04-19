import Info from '../../components/info/Info';

import './NotFound.scss';

function NotFound() {
    return (
        <div className='not-found'>
            <Info text={"Помилка 404 \n Сторінки не знайдено"}/>
        </div>
    );
}

export default NotFound;

