import React ,{Component} from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput,ReferenceManyField,DateField,SingleFieldList,ChipField,ListItem } from 'admin-on-rest/lib/mui';
import Input from './components/input.jsx'

import { Filter} from 'admin-on-rest/lib/mui';
;


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



export class UserCreate extends Component{

       handleChange(event) {
        this.props.onChange(this.props.source, event.target.value);
    }

    render(){

        console.log(this.props);
        const { source, floatingLabelText, record,options } = this.props;
 

    return  <Create kek="test-kek" {...this.props} >
            <Input label="kek" source="username" {...this.props}/>      
            <TextInput type={"password"} label="username" source="username" />
            <TextInput label="Password" source="password" />
            <EmailField label="email" source="email" />
    </Create>
    }

}

const EmailField = ({ record = {}, source }) => <a href={`mailto:${record[source]}`}>{record[source]}</a>;
