import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { MentorTitle } from "../mentor/MentorTitle";

export const LessonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="mentor.id" reference="Mentor" label="Mentor">
          <SelectInput optionText={MentorTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="Schedule" source="schedule" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
