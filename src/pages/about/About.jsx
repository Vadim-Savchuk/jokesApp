import './About.scss';

function About() {
    return (
        <div className='container'>
            <div className='about'>
                <ul className='about__list'>
                    <li className='about__news'>
                        <h2 className='subtitle'>Це тестовий проект створений для практики.</h2>
                    </li>
                    <li className='about__news'>
                        <h2 className='subtitle'>Додавайте будьласка свої жарти якщо вам не важко.</h2>
                    </li>
                    <li className='about__news'>
                        <h2 className='subtitle'>Оцінюйте жарти інших користувачів.</h2>
                    </li>
                    <li className='about__news'>
                        <h2 className='subtitle'>Ще хочу сказати що тут дуже маленька база даних тож додавайте не більше 2-3 жартів від себе.</h2>
                        <p className='subtitle'>Дякую за розуміння</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
