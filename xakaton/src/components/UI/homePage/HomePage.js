// // @ts-ignore
import img from './../../../img/img.png'

import classes from './home.css'
import React from "react"
function HomePage() {
    return (
       <div>

            <section className={classes.main__container}>
                <div className={classes.main__content}>
                    <div className={classes.main__content_text}>
                        <h1 className={classes.main__head}>
                            Инструмент для создания
                            тестов и проведения экзаменов
                        </h1>
                        <p className={classes.main__text}>
                            RUtes -это инструмент для учителей,
                            который помогает
                            мгновенно оценить прогресс класса
                            и каждого ученика индивидуально
                        </p>
                        <img className={classes.main__img} src={img} alt=""/>
                    </div>
                </div>
                <div className={classes.form_group}>
                    <div className={classes.teacher__button}>
                        <label className={classes.text_field__label_1} htmlFor="search">Учителям</label>
                        <a href="" className={classes.teacher__link}>
                            Начать сейчас
                        </a>
                    </div>
                    <div className={classes.text_field}>
                        <label className={classes.text_field__label} htmlFor="search">Ученикам</label>
                        <div className={classes.text_field__group}>
                            <input className={classes.text_field__input} placeholder='Введите код сессии' type="search" id="search" name="search"/>
                            <button className={classes.text_field__btn} type="button">Присоединиться!</button>
                        </div>
                    </div>



                </div>
            </section>
       </div>
    );
}

export default HomePage;
