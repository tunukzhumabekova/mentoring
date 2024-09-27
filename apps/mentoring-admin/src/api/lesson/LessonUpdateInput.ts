import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";

export type LessonUpdateInput = {
  description?: string | null;
  mentor?: MentorWhereUniqueInput | null;
  price?: number | null;
  schedule?: Date | null;
  title?: string | null;
};
