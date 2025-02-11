"use client";
import { OrderCard } from "@/components/order-card/order-card";

import { useProjects } from "@/hooks/useProjects";

import "./order-cards-list.scss";

export const OrderCardsList = () => {
  const { projects, loading } = useProjects();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="order_cards">
      {projects.map((project) => (
        <OrderCard key={project.id} project={project} />
      ))}
    </section>
  );
};
