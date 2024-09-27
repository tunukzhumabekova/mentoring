import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { MentorTitle } from "../mentor/MentorTitle";

export const LessonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="mentor.id" reference="Mentor" label="Mentor">
          <SelectInput optionText={MentorTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="Schedule" source="schedule" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
