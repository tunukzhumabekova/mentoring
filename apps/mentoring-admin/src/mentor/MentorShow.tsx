import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MENTOR_TITLE_FIELD } from "./MentorTitle";

export const MentorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="ProfileDescription" source="profileDescription" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Lesson"
          target="mentorId"
          label="Lessons"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Mentor"
              source="mentor.id"
              reference="Mentor"
            >
              <TextField source={MENTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price" source="price" />
            <TextField label="Schedule" source="schedule" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="mentorId"
          label="Reviews"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Mentor"
              source="mentor.id"
              reference="Mentor"
            >
              <TextField source={MENTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User" source="user" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
