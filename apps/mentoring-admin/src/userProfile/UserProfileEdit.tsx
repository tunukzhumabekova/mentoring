import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="RegisteredAt" source="registeredAt" />
      </SimpleForm>
    </Edit>
  );
};
