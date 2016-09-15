//@flow
import React,{Component} from 'react';
import { Delete } from 'admin-on-rest/lib/mui';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import Dashboard from './dashboard.jsx';
import {ProjectList,ProjectEdit,ProjectCreate} from './admin/projects.jsx'
import { UserList,UserCreate,UserEdit } from './users.jsx';
import {AlbumList} from './albums';


const App = () => (
    <Admin dashboard={Dashboard} restClient={jsonServerRestClient('http://localhost:3000')}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} />
       <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} remove={Delete}/>
    </Admin>
);




class Test extends Component{

    render(){
        console.log(this.props);

        return <div>kekek</div>
    }
}


export default App;

