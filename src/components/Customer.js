import React from 'react';

class Customer extends React.Component{
    render(){
        return (
            <div>
                <customerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <customerInfo id={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
        
    }
}

class customerProfile extends React.Component{
    render(){
        return()
    }
}

export default Customer;