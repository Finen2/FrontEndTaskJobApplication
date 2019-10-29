import React from 'react'
import Router from 'next/router'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {authenticationInital, tokenVerify, refresh} from '../network/Requests.js'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = async () => {
    await authenticationInital(this.state.email, this.state.password)
    await refresh()
    if (await tokenVerify() === undefined) {
     return alert('this is not a valid user')
    }else{
      Router.push('/Profile')
    }
  }

  //To be erased futher on
  onSubmitAuto = async () => {
    await authenticationInital("warren.buffet@willandskill.se", "berkshirehathaway2018")
    await refresh()
    if (await tokenVerify() === undefined) {
     return alert('this is not a valid user')
    }else{
      Router.push('/Profile')
    }
  }

  render() {
    return (
      <Form inline>
        <FormGroup className="mb-4 mr-sm-4 mb-sm-2">
          <Label for="exampleEmail" className="mr-sm-4">Email:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" value={this.state.email} onChange={e => this.onChange(e)} />
        </FormGroup>
        <FormGroup className="mb-4 mr-sm-4 mb-sm-2">
          <Label for="examplePassword" className="mr-sm-4">Password:</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password}  onChange={e => this.onChange(e)} />
        </FormGroup>
        <Button color="primary" className="mb-4 mr-sm-4 mb-sm-2" onClick={() => this.onSubmit()}>Login</Button>
        <Button color="secondary" className="mb-4 mr-sm-4 mb-sm-2" onClick={() => this.onSubmitAuto()}>Auto Login</Button>
      </Form>
    )
  }
}

export default Login
