import './NoDate.scss';

import dog from './img/smile.png';

function NoDate() {
    return (
        <div className="no-date-offer">
            <div className='no-date'>
                <img src={dog} alt="No Date" />
                <h2 className='subtitle'>Жартів поки що немає.</h2>
            </div>
        </div>
    );
}

export default NoDate;
