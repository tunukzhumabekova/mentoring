import { Mentor } from "../mentor/Mentor";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  mentor?: Mentor | null;
  rating: number | null;
  updatedAt: Date;
  user: string | null;
};
