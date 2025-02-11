"use client";
import Image from "next/image";

import timeIcon from "@/assets/clock-01.svg";
import messageIcon from "@/assets/message-text-01.svg";
import eyeIcon from "@/assets/eye-open.svg";

import type { Project } from "@/types/projectTypes";

import "./order-card.scss";

interface OrderCardProps {
  project: Project;
}

export const OrderCard = ({ project }: OrderCardProps) => {
  return (
    <div className="card">
      <div>
        <h5 className="heading">{project.title}</h5>
        {project.desc && <p className="description">{project.desc}</p>}

        <div className="status_info">
          <div className="status_item">
            <Image src={messageIcon} alt="icon" width={16} height={16} />
            <p>12</p>
          </div>
          <div className="status_item">
            <Image src={eyeIcon} width={16} height={16} alt="icon" />
            <p>59</p>
          </div>
          <div className="status_item">
            <Image src={timeIcon} width={16} height={16} alt="icon" />
            <p>~ 1 час назад</p>
          </div>
        </div>

        <div className="banner_section">
          <div className="banner">ФГОС</div>
          <div className="banner">Обучение</div>
          <div className="banner">pdf</div>
        </div>
      </div>

      <div className="price_section">
        <p> {project.budget_start && project.budget_end ? `${project.budget_end} ₽` : "Договорная"}</p>
      </div>
    </div>
  );
};
