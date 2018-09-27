import React, {Component} from "react";
import {connect} from  'react-redux'
import {Col} from 'react-bootstrap';
class Balance extends Component{
    render(){
        return(
            <Col xs={4} md={3}>
                <p>£{this.props.data.left}</p>
                <p>Left Available</p>
            </Col>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(Balance)
