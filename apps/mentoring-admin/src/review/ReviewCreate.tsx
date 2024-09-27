import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MentorTitle } from "../mentor/MentorTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <ReferenceInput source="mentor.id" reference="Mentor" label="Mentor">
          <SelectInput optionText={MentorTitle} />
        </ReferenceInput>
        <NumberInput label="Rating" source="rating" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
