
import Reflux from 'reflux';
import _ from 'underscore';

const DataActions = Reflux.createActions([
    {
        'loadData': {children: ['completed', 'failed']},
        'searchData': {children: ['completed', 'failed']}
    }
]);

var dbMock = [{name: "Paris"}, {name:"Montpellier"}, {name: "Toulouse"}, {name:"Bordeaux"}];
var getMockDatas = function(query=''){

    var promise = new Promise((resolve, reject) => {
        setTimeout(function(){
            var resp = dbMock;
            if(query.length > 0)
                resp = _.filter(resp, function(city){ return city.name.toLowerCase().indexOf(query.toLowerCase()) > -1; })
            if(resp.length === 0)
                resp = undefined;
            resolve(resp);
        }, 500);
    });
    return promise;

}

DataActions.loadData.listen(function(query=''){
    getMockDatas(query).then(this.completed).catch(this.failed);
});

export default DataActions;
