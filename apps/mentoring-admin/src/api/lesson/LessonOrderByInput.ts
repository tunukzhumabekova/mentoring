import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  mentorId?: SortOrder;
  price?: SortOrder;
  schedule?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
