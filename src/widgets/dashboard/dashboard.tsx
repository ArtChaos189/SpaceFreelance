import Image from "next/image";

import { OrderCardsList } from "../order-cards-list/order-cards-list";

import magnifier from "@/assets/magnifier.svg";
import filter from "@/assets/filter.svg";

import "./dashboard.scss";

import type { FC } from "react";

export const Dashboard: FC = () => (
  <section className="dashboard">
    <div className="cards_wrapper">
      <div className="card_tasks">
        <h3 className="header">12 000+</h3>
        <p className="description">Актуальных задач</p>
      </div>
      <div className="card_clients">
        <h3 className="header">95%</h3>
        <p className="description">Довольных клиентов</p>
      </div>
      <div className="card_oneTask">
        <h3 className="header">2,8</h3>
        <p className="description">Откликов на одну задачу</p>
      </div>
    </div>

    <div className="search_sort">
      <div className="search_wrapper">
        <Image src={magnifier} alt="Поиск" width={20} height={20} className="search_icon" />
        <input type="text" className="search_input" placeholder="Искать в заказах" />
      </div>
      <button className="filter-button">
        <Image src={filter} alt="Поиск" width={16} height={16} className="search_icon" />
        Фильтр
      </button>
    </div>
    <OrderCardsList />
  </section>
);
