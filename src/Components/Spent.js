import React, {Component} from "react";
import {connect} from  'react-redux';
import {Col} from 'react-bootstrap';

class Spent extends Component{
    render(){
        return(
            <Col xs={4} md={3}>
                <p className="mediumText">£{this.props.data.spent}</p>
                <p className="smallText">total sent</p>
            </Col>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(Spent)

