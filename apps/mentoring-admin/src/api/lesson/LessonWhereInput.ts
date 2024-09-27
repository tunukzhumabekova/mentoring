import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LessonWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  mentor?: MentorWhereUniqueInput;
  price?: FloatNullableFilter;
  schedule?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
