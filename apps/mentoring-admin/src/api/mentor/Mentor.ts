import { Lesson } from "../lesson/Lesson";
import { Review } from "../review/Review";

export type Mentor = {
  createdAt: Date;
  email: string | null;
  id: string;
  lessons?: Array<Lesson>;
  name: string | null;
  profileDescription: string | null;
  rating: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
