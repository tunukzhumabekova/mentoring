import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "user";

export const ReviewTitle = (record: TReview): string => {
  return record.user?.toString() || String(record.id);
};
