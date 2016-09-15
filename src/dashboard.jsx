//@flow

import React, {Component} from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ReactDOM from 'react-dom';
import {TextField} from 'material-ui/TextField';
import Input from './components/input.jsx';


export  default class Dashboard extends Component{
  handleChange(event) {
        
        this.props.onChange(this.props.source, event.target.value);
    }

    render(){
        const { source, label, record, options } = this.props;

        return  <Card style={{ margin: '2em' }}>
                   
                </Card>
    }
}
