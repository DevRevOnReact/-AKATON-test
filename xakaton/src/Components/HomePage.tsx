// @ts-ignore
import img from './../img/img.png'
// @ts-ignore
import Header from "./../UI/Header.tsx";

function HomePage() {
    return (
       <>
           <Header />
            <section className="main__container">
                <div className='main__content'>
                    <div className="main__content-text">
                        <h1 className="main__head">
                            Инструмент для создания
                            тестов и проведения экзаменов
                        </h1>
                        <p className="main__text">
                            RUtes -это инструмент для учителей,
                            который помогает
                            мгновенно оценить прогресс класса
                            и каждого ученика индивидуально
                        </p>
                        <img className='main__img' src={img} alt=""/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="teacher__button">
                        <label className="text-field__label-1" htmlFor="search">Учителям</label>
                        <a href="" className="teacher__link">
                            Начать сейчас
                        </a>
                    </div>
                    <div className="text-field">
                        <label className="text-field__label" htmlFor="search">Ученикам</label>
                        <div className="text-field__group">
                            <input className="text-field__input" placeholder='Введите код сессии' type="search" id="search" name="search"/>
                            <button className="text-field__btn" type="button">Присоединиться!</button>
                        </div>
                    </div>



                </div>
            </section>
       </>
    );
}

export default HomePage;
