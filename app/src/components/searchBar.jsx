import React from 'react';
import Reflux from 'reflux';
import DataActions from "../actions/dataActions.jsx";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        DataActions.loadData(event.target.value);
    }
    render() {
        var value = this.state.value;
        return <input type="text" value={value} onChange={this.handleChange.bind(this)} />;
    }
}

export default SearchBar;