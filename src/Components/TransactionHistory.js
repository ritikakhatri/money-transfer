import React, {Component} from "react";
import {connect} from  'react-redux'
import Transaction from './Transaction'
import {Row} from 'react-bootstrap';
class TransactionHistory extends Component {
	
	render() {
		const elements= this.props.data.transactions.map( (transaction,i) => <Row className="transaction" key={i}><Transaction transaction={transaction}/></Row> )
        return (
            <div className="transactionContainer"> 
				<Row><h2>Transactions</h2></Row>
                {elements}
            </div>
        );
	}
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(TransactionHistory)