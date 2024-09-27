import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mentorId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
