import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  mentor?: MentorWhereUniqueInput;
  rating?: FloatNullableFilter;
  user?: StringNullableFilter;
};
