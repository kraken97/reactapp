//@flow
import React from 'react';
import { PostList, PostEdit, PostCreate } from './posts';
import { Delete } from 'admin-on-rest/lib/mui';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import Dashboard from './dashboard.jsx';

import { UserList,UserCreate,UserEdit } from './users';
import {AlbumList} from './albums';



const App = () => (
    <Admin dashboard={Dashboard} restClient={jsonServerRestClient('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} />

    </Admin>
);




export default App;

