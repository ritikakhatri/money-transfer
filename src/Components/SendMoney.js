import React, {Component} from "react";
import {FormGroup, FormControl, ControlLabel, Button,Row } from 'react-bootstrap';
import {transfer_balance} from '../js/actions/index'
import { connect } from "react-redux";
import Error from './Error'
import Feedback from './Feedback'
class SendMoney extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name : '',
               nameErrorMsg:'',
               email: '', 
               emailErrorMsg:'',
               amount: '',
               amountErrorMsg:'',
          }
     }
  validateName(name){
      const regex = /^[a-zA-Z ]{2,30}$/;
      let error = 'Please enter a valid name'
      if (name.length > 0 && regex.test(name)) error = ''
      return error
  }

  getValidationName = (e)=> {
    let name = e.target.value;
    let error = this.validateName(name)
    this.setState({name,nameErrorMsg:error });
  }

  validateCurreny(amount){
    const regex  = /^\d+(\.\d{1,2})?$/;
    let error = 'Please enter a valid amount'
    if (amount > 0 && regex.test(amount)) error = ''
    return error
  }
  getValidationCurrency = (e)=>{
     let amount = e.target.value
     let error = this.validateCurreny(amount)
     this.setState({amount, amountErrorMsg: error});
  }

  validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let error = 'Please enter a valid email'
    if(regex.test(email)) error = ''
    return error 
  }
  
  getValidationEmail = (e)=>{
     let email = e.target.value;
     let error = this.validateEmail(email)
     this.setState({email,emailErrorMsg: error});
  }
  handleChange = (e)=> {
     this.setState({ [e.target.name]: e.target.value });
  }
  validateAll(data){
      let name= this.validateName(data.name)
      let email =  this.validateEmail(data.email)
      let amount = this.validateCurreny(data.amount)

      if(name || email || amount){
          this.setState({
            nameErrorMsg: name,
            emailErrorMsg: email,
            amountErrorMsg : amount
          })

          return true
      }
      return false
  }
  onSubmit =(e)=>{
      e.preventDefault()
      let {name, email, amount} = this.state; 
      let data = {
        name,
        email,
        amount
      }
      if(this.validateAll(data)) return;
      this.props.dispatch(transfer_balance(data)) 
      this.setState({
          name: '',
          email: '',
          amount: ''
      })
      
  }

  render() {
    return (
    	<form  onSubmit = {this.onSubmit} className='needs-validation' noValidate>
      	<h1>Send Money</h1>
          <FormGroup controlId="formBasicText" > 
               <ControlLabel>Name</ControlLabel>
               <FormControl type="text" name="name" value={this.state.name} onChange={this.getValidationName}/>
               <Feedback msg={this.state.nameErrorMsg}/>
          </FormGroup>
          <FormGroup > 
               <ControlLabel>Email</ControlLabel>
               <FormControl required type="email" name="email" value={this.state.email} onChange={this.getValidationEmail} />
               <FormControl.Feedback />
               <Feedback msg={this.state.emailErrorMsg}/>
          </FormGroup>
          <FormGroup >
               <ControlLabel className="amountLabel">Amount</ControlLabel><span className="currency">£</span>
               <FormControl className="currencyInput" required type="text" placeholder= '0' name="amount" min="0" value={this.state.amount} onChange={this.getValidationCurrency}/>
               <Feedback  msg={this.state.amountErrorMsg}/>
          </FormGroup>

                    <Row>
                      <Error />
                    </Row>
                    <Row xs={12} className="submitButtonContainer">
          	     <Button className="submitButton" bsStyle="primary" type="submit" bsSize="large"> Send</Button>
                    </Row>
               

      </form>
    );
  }
}

const mapDispatchToProps = dispatch=>{
  return {
   transfer_balance: ()=>dispatch(transfer_balance())
 };
};
export default connect(mapDispatchToProps)(SendMoney);
