import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput,EmailInput,EmailField,ReferenceManyField,DateField,SingleFieldList,ChipField,ListItem } from 'admin-on-rest/lib/mui';
import Input from './components/input.jsx'

import { Filter} from 'admin-on-rest/lib/mui';


export const UserList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField label="id" source="id" />          
            <TextField label="username" source="username" />
            <TextField label="Password" source="password" />
            <EmailField label="email" source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.username}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={UserTitle} {...props}>
        <DisabledInput label="Id" source="id" />        
            <TextInput label="username" source="username" />
            <TextInput label="Password" source="password" />
            <TextInput label="email" source="email" />

    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
             <Input label="kekekek" source="firstName"/>      
            <TextInput label="username" source="username" />
            <TextInput label="Password" source="password" />
            <TextInput label="email" source="email" />
    </Create>
);
