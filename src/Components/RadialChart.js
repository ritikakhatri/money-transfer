import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Balance from './Balance'
import Spent from './Spent'
import {connect} from  'react-redux'
const DEFAULT_COLOR = '#040404';

class RadialChart extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.setState({ setStrokeLength: true });
        });
    }
    render() {

        const {
            className,
            radius,
            strokeWidth,
            dimension,
            color
        } = this.props;
        
        const progress = ((this.props.data.initailBalance - this.props.data.spent)/this.props.data.initailBalance)*100
        const circleRadius = Math.min(radius, 85)
        const circumference = 2 * 3.14 * circleRadius
        const strokeLength =  circumference / 100 * progress 

        return (
           <div
                className={classNames('radial-chart', className, {
                    'no-progress': strokeLength === 0
                })}
           >
              <h1 className="myAccountHeader">My Account</h1>


                  <Spent/>

               <Col xs={4} md={6}>
               <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
                   <circle
                       className="radial-chart-total"
                       stroke={color}
                       strokeWidth={strokeWidth}
                       fill="none"
                       cx="90"
                       cy="90"
                       r={circleRadius}
                   />
                   <circle
                       className="radial-chart-progress"
                       stroke={color}
                       strokeWidth={strokeWidth}
                       strokeDasharray={`${strokeLength},${circumference}`}
                       strokeLinecap="round"
                       fill="none"
                       cx="90"
                       cy="90"
                       r={circleRadius}
                   />
               </svg>
               </Col>
                    <Balance/>

               
           </div>
        );
    }
}
RadialChart.defaultProps = {
    radius: 40,
    progress: 100,
    strokeWidth: 10,
    dimension: 120,
    color: DEFAULT_COLOR
};
RadialChart.propTypes = {
    className: PropTypes.string,
    radius: PropTypes.number,
    strokeWidth: PropTypes.number,
    color: PropTypes.string,
    progress: PropTypes.number,
    dimension: PropTypes.number
};
const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(RadialChart)