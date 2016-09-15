import React ,{Component} from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput,ReferenceManyField,DateField,SingleFieldList,ChipField,ListItem } from 'admin-on-rest/lib/mui';
import Input from '../components/input.jsx'

import { Filter} from 'admin-on-rest/lib/mui';



export const ProjectList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField label="id" source="id" />          
            <TextField label="Title" source="title" />
            <TextField label="Description" source="description" />
            <TextField label="Background Color" source="backgroundColor" />
            <TextField label="Order" source="order" />
            <TextField label="Visible" source="visible" />
            <EditButton />
        </Datagrid>
    </List>
);



export const ProjectEdit = (props) => (
    <Edit {...props}>
        <DisabledInput label="Id" source="id" />                
            <TextInput label="Title" source="title" />
            <TextInput label="Description" source="description" />
            <TextInput label="Background Color" source="backgroundColor" />
            <TextInput label="Order" source="order" />
            <TextInput label="Visible" source="visible" />

    </Edit>
);



export class ProjectCreate extends Component{

       handleChange(event) {
        this.props.onChange(this.props.source, event.target.value);
    }

    render(){

        console.log(this.props);
        const { source, floatingLabelText, record,options } = this.props;
 

    return  <Create {...this.props} >
            <TextInput label="id" source="id" />          
            <TextInput label="Title" source="title" />
            <TextInput label="Description" source="description" />
            <TextInput label="Background Color" source="backgroundColor" />
            <TextInput label="Order" source="order" />
            <TextInput label="Visible" source="visible" />
    </Create>
    }

}

