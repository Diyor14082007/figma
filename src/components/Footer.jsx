import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_main">
            <div className="bir">
              <div className="i1">
                <Image src="/img1.svg" fill />
              </div>
              <br />
              <p>
                Аренда мобильных и <br />
                гусеничных кранов <br />
                LIEBHERR <br />
                <br />© 2000-2021 Все права защищены
              </p>
            </div>
            <div className="ikki">
              <p>
                Клиентам
                <br />
                <br />О компании
                <br />
                <br />
                Услуги
                <br />
                <br />
                Каталог техники
                <br />
                <br />
                Аренда кранов
                <br />
                <br />
                Наши работы
                <br />
                <br />
                Прайс-лист
                <br />
                <br />
                Контакты
                <br />
                <br />
              </p>
            </div>
            <div className="uch">
              <p>
                Техника
                <br />
                <br />
                Гусеничные краны
                <br />
                <br />
                Мобильные краны
                <br />
                <br />
                Низеорамные краны
                <br />
                <br />
                Модульные платформы
                <br />
                <br />
              </p>
            </div>
            <div className="tort">
              <p>
                Услуги
                <br />
                <br />
                Аренда гусеничного крана
                <br />
                <br />
                Аренда мобильного крана
                <br />
                <br />
                Аренда башенного крана
                <br />
                <br />
                Перевозка негабаритного <br />
                груза
                <br />
                <br />
                Разработка ппрк
              </p>
            </div>
            <div className="besh">
              <button>Свяжитесь со мной</button>
              <br />
              <br />
              <div className="foot">
                <Image src="/foot.svg" fill />
              </div>
            </div>
            <div className="olti">
              <p>
                Контакты
                <br />
                <br />
                +7 (499)929-96-66
                <br />
                +7 (985)364-55-18
                <br />
                +7 (985)226-20-30
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
