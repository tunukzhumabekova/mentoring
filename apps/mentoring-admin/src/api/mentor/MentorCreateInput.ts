import { LessonCreateNestedManyWithoutMentorsInput } from "./LessonCreateNestedManyWithoutMentorsInput";
import { ReviewCreateNestedManyWithoutMentorsInput } from "./ReviewCreateNestedManyWithoutMentorsInput";

export type MentorCreateInput = {
  email?: string | null;
  lessons?: LessonCreateNestedManyWithoutMentorsInput;
  name?: string | null;
  profileDescription?: string | null;
  rating?: number | null;
  reviews?: ReviewCreateNestedManyWithoutMentorsInput;
};
