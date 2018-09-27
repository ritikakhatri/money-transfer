import React, {Component} from "react";
import {connect} from  'react-redux';
import {Alert} from 'react-bootstrap';
class Error extends Component{
    render(){
        if(this.props.data.isError) {
            return(
                <div>
                    <Alert bsStyle="danger">Insufficient Balance</Alert>    
                </div>
            )
        }
        return null
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(Error)