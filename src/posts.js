// in src/posts.jss
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput } from 'admin-on-rest/lib/mui';



// in src/posts.js
import { Filter} from 'admin-on-rest/lib/mui';


export const PostList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField label="id" source="id" />
          
            <TextField label="title" source="title" />
            <TextField label="author" source="author" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={PostTitle} {...props}>
        <DisabledInput label="Id" source="id" />
        <TextInput label="Title" source="title" />
        <LongTextInput label="Author" source="author" />
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <TextInput label="Title" source="title" />
        <LongTextInput label="Author" source="author" />
    </Create>
);

