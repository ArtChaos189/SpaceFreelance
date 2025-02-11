export enum ProjectStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  IN_PROGRESS = "IN_PROGRESS",
}

export interface Project {
  id: number;
  title: string;
  status: ProjectStatus;
  desc: string;
  budget_start: number | null;
  budget_end: number | null;
  currency: string;
  exp_days_min: number | null;
  exp_days_max: number | null;
  period: number | null;
  customer_id: number;
  freelancer_id: number | null;
}
