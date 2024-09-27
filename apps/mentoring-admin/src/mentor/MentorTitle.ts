import { Mentor as TMentor } from "../api/mentor/Mentor";

export const MENTOR_TITLE_FIELD = "name";

export const MentorTitle = (record: TMentor): string => {
  return record.name?.toString() || String(record.id);
};
