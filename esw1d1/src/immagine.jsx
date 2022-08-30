import React from "react";

class Immages extends React.Component {
    
    render(){
       return <div><img style={{width: this.props.width }} alt={this.props.alt} src={this.props.src}/></div>
    }
}


export default Immages;