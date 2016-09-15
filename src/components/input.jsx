import React, { Component, PropTypes } from 'react';
// import { TextInput} from 'admin-on-rest/lib/mui';

import TextField from 'material-ui/TextField';


export default class Input extends Component {
    handleChange(event) {
        this.props.onChange(this.props.source, event.target.value);
    }

    render() {
        const { source, label, record,options } = this.props;

       console.log(this.props);
        return (<TextField 
            name={source}
            floatingLabelText={label}
            value={record[source] || ''}
            type={"email"}
            onChange={this.handleChange.bind(this)}
            {...options}
        />);
    }
}

// Input.propTypes = {
//     source: PropTypes.string.isRequired,
//     label: PropTypes.string,
//     record: PropTypes.object,
//     options: PropTypes.object,
//     onChange: PropTypes.func,
//     includesLabel: PropTypes.bool.isRequired,
// };
// Input.defaultProps = {
//     record: {},
//     options: {},
//     includesLabel: true,
// };
