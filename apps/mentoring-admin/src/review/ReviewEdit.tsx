import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MentorTitle } from "../mentor/MentorTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <ReferenceInput source="mentor.id" reference="Mentor" label="Mentor">
          <SelectInput optionText={MentorTitle} />
        </ReferenceInput>
        <NumberInput label="Rating" source="rating" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
