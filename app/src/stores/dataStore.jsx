import Reflux from 'reflux';
import DataActions from "../actions/dataActions.jsx";

const DataStore = Reflux.createStore({
    init: function() {
        this.state = {cities: []};
        this.listenToMany(DataActions);
    },

    onLoadDataCompleted: function (data) {
        this.state.cities = data;
        console.log(data);
        this.trigger(data);
    }}
);

export default DataStore;