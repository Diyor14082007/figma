import Image from "next/image";
import React from "react";

const Katalog = () => {
  return (
    <>
      <section className="katal">
        <div className="container">
          <h4>
            <b>Главная -</b> Каталог техники
          </h4>
          <br />
          <br />
          <div className="katal_main">
            <h1>Каталог техники</h1>
            <br />
            <div className="katal_main_wrapper">
              <div>40 тонн</div>
              <div>50 тонн</div>
              <div>60 тонн</div>
              <div>70 тонн</div>
              <div>80 тонн</div>
              <div>90 тонн</div>
              <div>10 тонн</div>
              <div>20 тонн</div>
              <div>30 тонн</div>
              <div>40 тонн</div>
              <div>50 тонн</div>
              <div>60 тонн</div>
              <div>70 тонн</div>
              <div>80 тонн</div>
              <div>90 тонн</div>
              <div>10 тонн</div>
              <div>20 тонн</div>
              <div>30 тонн</div>
              <div>40 тонн</div>
              <div>50 тонн</div>
              <div>60 тонн</div>
              <div>70 тонн</div>
              <div>80 тонн</div>
              <div>90 тонн</div>
              <div>10 тонн</div>
            </div>
            <br />
            <br />
            <div className="parents">
              <div className="container">
              <div className="parents_main_left">
                  <button className="btn10">Параметры</button>
                  <br />
                  <div className="parents_main_left_vid">
                    <h3>Вид техники</h3>
                    <br />
                    <p>
                      Мобильные краны
                      <br />
                      <br />
                      Гусеничные краны
                      <br />
                      <br />
                      Низкорамные тралы
                      <br />
                      <br />
                      Модульные платформы
                    </p>
                    <br />
                  
                    <div className="ot">
                    <h3>Грузоподъемность т.</h3>
                    <br />
                    <div className="vis">
                      <div className="qirq">от 40</div>
                      <div className="qirq">от 40</div>
                      </div>
                      <br />
                      <Image src="/img5.svg" fill />
                    </div>
                    <div className="ot">
                      <h3>Высота подъема, м.</h3>
                      <br />
                      <div className="vis">
                      <div className="qirq">от 40</div>
                      <div className="qirq">от 40</div>
                      </div>
                      <br />
                      <Image src="/img5.svg" fill />
                    </div>
                    <div className="ot">
                      <h3>Высота подъема, м.</h3>
                      <br />
                      <div className="vis">
                      <div className="qirq">от 40</div>
                      <div className="qirq">от 40</div>
                      </div>
                      <br />
                      <Image src="/img5.svg" fill />
                    </div>
                    <h3>Очистить фильтр</h3>
                    <br />
                    <button className="btn11">Показать</button>
                  </div>
                </div>
                <br /><br /><div className="parents_main_left">
                  <button className="btn10">Параметры</button>
                  <br />
                  <div className="parents_main_left_vid">
                    <h3>Вид техники</h3>
                    <br />
                    <p>
                      Мобильные краны
                      <br />
                      <br />
                      Гусеничные краны
                      <br />
                      <br />
                      Низкорамные тралы
                      <br />
                      <br />
                      Модульные платформы
                    </p>
                    <br />
                  
                    <div className="ot">
                    <h3>Грузоподъемность т.</h3>
                    <br />
                    <div className="vis">
                      <div className="qirq">от 40</div>
                      <div className="qirq">от 40</div>
                      </div>
                      <br />
                      <Image src="/img5.svg" fill />
                    </div>
                    <div className="ot">
                      <h3>Высота подъема, м.</h3>
                      <br />
                      <div className="vis">
                      <div className="qirq">от 40</div>
                      <div className="qirq">от 40</div>
                      </div>
                      <br />
                      <Image src="/img5.svg" fill />
                    </div>
                    <div className="ot">
                      <h3>Высота подъема, м.</h3>
                      <br />
                      <div className="vis">
                      <div className="qirq">от 40</div>
                      <div className="qirq">от 40</div>
                      </div>
                      <br />
                      <Image src="/img5.svg" fill />
                    </div>
                    <h3>Очистить фильтр</h3>
                    <br />
                    <button className="btn11">Показать</button>
                  </div>
                  
                </div>
                <br />
              </div>
              <div className="parents_main_right">
                    <Image src="/filtr.svg" fill />
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Katalog;
