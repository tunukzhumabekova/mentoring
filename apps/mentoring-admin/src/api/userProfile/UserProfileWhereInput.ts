import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserProfileWhereInput = {
  age?: IntNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  registeredAt?: DateTimeNullableFilter;
};
