import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  registeredAt?: SortOrder;
  updatedAt?: SortOrder;
};
