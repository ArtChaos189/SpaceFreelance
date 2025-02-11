"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import type { Project } from "@/types/projectTypes";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("/api/proxy");
        setProjects(data);
      } catch (error) {
        setError(error.response?.data?.message || "Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, error, loading };
};
