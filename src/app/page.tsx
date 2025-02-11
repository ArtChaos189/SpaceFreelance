"use client";

import { AdvertisingSection } from "@/widgets/advertising-section/advertising-section";
import { Dashboard } from "@/widgets/dashboard/dashboard";

import type { FC } from "react";

import "./home.scss";

const Home: FC = () => {
  return (
    <section className="home_section">
      <div className="home_wrapper">
        <Dashboard />
        <AdvertisingSection />
      </div>
    </section>
  );
};

export default Home;
