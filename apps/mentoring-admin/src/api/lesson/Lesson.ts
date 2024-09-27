import { Mentor } from "../mentor/Mentor";

export type Lesson = {
  createdAt: Date;
  description: string | null;
  id: string;
  mentor?: Mentor | null;
  price: number | null;
  schedule: Date | null;
  title: string | null;
  updatedAt: Date;
};
