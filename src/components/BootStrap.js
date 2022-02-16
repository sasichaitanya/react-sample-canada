import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { } from 'react-bootstrap';
import './styles/customStyle.css';
 



export class BootStrap extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     fname:'',
     lname:'',
     email:'',
     password:''
    }

  }
  changefName=(ev) =>{
    this.setState({
      fname:ev.target.value
    })
  }

  changelName=(ev)=>{
    this.setState({
      lname:ev.target.value
    })
  }

  changeemail=(ev)=>{
    this.setState({
      email:ev.target.value
    })
  }


  changepassword=(ev)=>{
    this.setState({
      password:ev.target.value
    })
  }

  getDetails=(ev)=>{
     ev.preventDefault()
     console.log('======================',this.state)
  }

  click(){
    alert("sucessfully registered")
  }

  
    render() {
      // const alert=this.state.Statevariable.map((variant, idx) => (
        
      //   <Alert key={idx} variant={variant}>
      //     This is a {variant} alert with{' '}
      //     <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      //     like.
      //   </Alert>
      // ));
        return (
<div>
{/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
 </Form> */}


<form onSubmit={this.getDetails}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" value={this.state.fname} onChange={this.changefName} className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" value={this.state.lname} onChange={this.changelName} className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={this.state.email} onChange={this.changeemail}  className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password}onChange={this.changepassword} className="form-control" placeholder="Enter password" />
                </div>
                <br/>
                <Button type="submit" onClick={this.click} className="btn btn-primary btn-block">Sign Up</Button>
                <p className="forgot-password text-right">
                    Already registered <a >sign in?</a>
                </p>
            </form>
  </div>
        )
    }
}

export default BootStrap


