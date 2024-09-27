import { LessonUpdateManyWithoutMentorsInput } from "./LessonUpdateManyWithoutMentorsInput";
import { ReviewUpdateManyWithoutMentorsInput } from "./ReviewUpdateManyWithoutMentorsInput";

export type MentorUpdateInput = {
  email?: string | null;
  lessons?: LessonUpdateManyWithoutMentorsInput;
  name?: string | null;
  profileDescription?: string | null;
  rating?: number | null;
  reviews?: ReviewUpdateManyWithoutMentorsInput;
};
