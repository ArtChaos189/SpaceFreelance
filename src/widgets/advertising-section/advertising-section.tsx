import Image from "next/image";

import arrowIcon from "@/assets/arrow-up-right.svg";
import trustImage1 from "@/assets/a2 1.png";
import trustImage2 from "@/assets/Black 118.png";

import type { FC } from "react";

import "./advertising-section.scss";

export const AdvertisingSection: FC = () => (
  <section className="advertising_section">
    <div className="advertising_card">
      <div className="ad_banner">
        <div className="banner">Реклама</div>
        <button className="ad_banner_button">
          <Image src={arrowIcon} alt="arrow" width={24} height={24} />
        </button>
      </div>
      <h4 className="heading_advertising_card">Заголовок рекламы</h4>
      <p className="description_advertising_card">
        Figma ipsum component variant main layer. Fill ellipse editor duplicate arrange. Auto list edit union selection
        horizontal boolean team figjam line. Rotate selection hand arrange library layer. Arrange vector line draft.
      </p>
    </div>

    <div className="trust_card">
      <Image src={trustImage2} width={56} height={56} alt="image" />
      <h4>Проверка репутации заказчиков/фрилансеров</h4>
      <p>
        Мы ценим честность и прозрачность, поэтому каждый пользователь проходит систему рейтинга и отзывов. Это помогает
        избежать ненадёжных исполнителей и недобросовестных заказчиков
      </p>
    </div>

    <div className="trust_card">
      <Image src={trustImage1} width={56} height={56} alt="image" />
      <h4>Безопасная сделка: работай без риска</h4>
      <p>
        Мы защищаем обе стороны – и заказчика, и исполнителя. Никаких обманов, споров и потерь – только честные сделки,
        прозрачные условия и уверенность в каждом сотрудничестве
      </p>
    </div>
  </section>
);
