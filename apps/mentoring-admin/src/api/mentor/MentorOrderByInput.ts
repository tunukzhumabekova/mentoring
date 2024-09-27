import { SortOrder } from "../../util/SortOrder";

export type MentorOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  profileDescription?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
