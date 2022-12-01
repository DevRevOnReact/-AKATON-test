// @ts-ignore
import Header from "./../UI/Header.tsx";
// @ts-ignore
import img from './../img/img_2.png'
const DescriptionPage = () => {
    return (
      <>
        <Header/>
          <div className="container__desc">
              <h1 className="desc__head">
                  Описание сессии
              </h1>
          <section className="description">

              <div className="description__content">
                  <h2 className="description__content-head">Lorem ipsum.</h2>
                  <p className="description__content-text">
                      Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. A accusantium aliquam commodi
                      deserunt earum eius impedit, iste minus nobis, placeat, quo
                      quos totam ut? Consequuntur maxime officia quae voluptates!
                      Praesentium! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. A accusantium aliquam commodi
                      deserunt earum eius impedit, iste minus nobis, placeat,
                      quo quos totam ut? Consequuntur maxime
                      officia quae voluptates! Praesentium!
                  </p>
              </div>
          </section>
              <div className="card__description">
                  <img src={img} alt="" className="card__img"/>
                  <h2 className="card__head">Lorem ipsum.</h2>
                  <p className="card__text">240 вопросов</p>
                  <a href="" className="card__link">
                      Начать сейчас
                  </a>
              </div>
          </div>
      </>
    );
};

export default DescriptionPage;
