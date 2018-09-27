import React, {Component} from "react";
import {Col} from "react-bootstrap";

class Transaction extends Component{
    render(){
        let {name, email,amount} = this.props.transaction
        return(
            <div>
                <Col xs={6} md={6}>
                    <p>{name}</p>
                    <p className="smallest">{email}</p>
               </Col>
               <Col xs={6} md={6}>
                    <p>£{amount}</p> 
               </Col>
            </div>
        )
    }
}



export default Transaction