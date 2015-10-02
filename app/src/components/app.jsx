import React from "react";
import Reflux from "reflux";
import DataStore from "../stores/dataStore.jsx";
import DataActions from "../actions/dataActions.jsx";
import SearchBar from "../components/searchBar.jsx";
import TableView from "../components/tableView.jsx";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cities: []};

    }
    onDataChange(data) {
        this.setState({
            cities: data
        });
        console.log(this.state.cities);
    }
    componentWillMount(){
        DataActions.loadData();
    }
    componentDidMount() {
        DataStore.listen(this.onDataChange.bind(this));
    }
    render() {
        return (<div>
                    <SearchBar /><br/><br />
                    <TableView cities={this.state.cities} />
                </div>);
    }
}

export default App;