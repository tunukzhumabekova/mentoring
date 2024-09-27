import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="RegisteredAt" source="registeredAt" />
      </SimpleForm>
    </Create>
  );
};
