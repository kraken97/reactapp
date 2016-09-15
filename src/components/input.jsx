import React, { Component, PropTypes } from 'react';
import { TextInput} from 'admin-on-rest/lib/mui';




export default class Input extends Component {
    handleChange(event) {
        console.log(event);
         console.log(this.props.source);
        
        this.props.onChange(this.props.source, event.target.value);
    }

    render() {
        const { source, label, record,onChange,options } = this.props;
        console.log(this.props)
        return (<input type={"gdfgdgdf"} onChange={this.handleChange} value={"fdsfsd"}/>);
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
