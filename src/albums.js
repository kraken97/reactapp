//@flow

// in src/posts.jss
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput } from 'admin-on-rest/lib/mui';





export const AlbumList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField label="id" source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField label="title" source="title" />
        </Datagrid>
    </List>
);