import React from 'react';

class TableView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.cities === undefined){
            return <p> Unknown </p>
        }
        else if(this.props.cities.length > 0){
            return (<div>
                {this.props.cities.map(function(city){
                    return <div style={{height: "25px", border: "1px solid rgba(222,222,222, 0.4)"}} key={city.name}>{city.name}</div>;
                })}
            </div>);
        }else{
            return <p> Loading ... </p>
        }

    }

}

export default TableView;