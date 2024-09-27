import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MENTOR_TITLE_FIELD } from "../mentor/MentorTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Reviews"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Mentor" source="mentor.id" reference="Mentor">
          <TextField source={MENTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User" source="user" />{" "}
      </Datagrid>
    </List>
  );
};
