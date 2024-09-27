import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  mentor?: MentorWhereUniqueInput | null;
  rating?: number | null;
  user?: string | null;
};
