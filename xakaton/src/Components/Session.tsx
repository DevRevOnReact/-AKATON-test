// @ts-ignore
import img from './../img/img_3.png'
// @ts-ignore
import Header from "./../UI/Header.tsx";
// @ts-ignore
import book from './../img/icons/img.png'
// @ts-ignore
import add from './../img/icons/img_1.png'
// @ts-ignore
import del from './../img/icons/img_2.png'


const Session = () => {
    return (
       <>
       <Header/>
           <section className="session">
               <div className="session__content">
                   <h1 className="session__head">
                       Добро пожаловать здесь вы можете ознакомится с вашими сессиями!
                   </h1>
                   <ul className="session__list">
                       <li><img className='session__img' src={book} alt=""/> Великая отечественная война(история, 11 класс)</li>
                       <li><img className='session__img' src={book} alt=""/> Великая отечественная война(история, 11 класс)</li>
                       <li><img className='session__img' src={book} alt=""/> Великая отечественная война(история, 11 класс)</li>
                   </ul>
               </div>
               <div className="session__dependencies">
                   <img className="session__people" src={img} alt=""/>
                   <a href="" className="session__add"><img src={add} alt=""/> Создать сессию</a>
                   <a href="" className="session__delete"><img src={del} alt=""/>Удалить сессию</a>
               </div>
           </section>
       </>
    );
};

export default Session;
