import React, {Component} from "react";
class Feedback extends Component{
    render(){
        if(this.props.msg && this.props.msg.length <= 0) return null
        return(
            <span className="help-block"><span>{this.props.msg}</span></span>
        )
    }
}

export default Feedback