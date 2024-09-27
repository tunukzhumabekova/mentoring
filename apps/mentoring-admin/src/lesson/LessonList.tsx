import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MENTOR_TITLE_FIELD } from "../mentor/MentorTitle";

export const LessonList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Lessons"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Mentor" source="mentor.id" reference="Mentor">
          <TextField source={MENTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <TextField label="Schedule" source="schedule" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
