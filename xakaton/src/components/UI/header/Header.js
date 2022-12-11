import {Link} from "react-router-dom";
import React from "react"
import classes from "./header.css"
const Header = () => {
    return (

        <header>
            <h1 className={classes.nav__head}><a href='#'>RUtest</a></h1>
            <ul className={classes.nav_header}>
                <li><Link to='/home'>Главная</Link></li>
                <li><Link to='/list-quiz'>Сессии</Link></li>
                <li><Link to='/how-use'>Как пользоваться</Link></li>
                <li><Link to='/'>Войти</Link></li>
            </ul>
        </header>
    );
};

export default Header;
