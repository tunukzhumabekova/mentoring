import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type MentorWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  name?: StringNullableFilter;
  profileDescription?: StringNullableFilter;
  rating?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
};
