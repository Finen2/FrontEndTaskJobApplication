import React from 'react'
import Router from 'next/router'
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
      <div>
        <input type="email" name="email" placeholder="email" value={this.state.email} onChange={e => this.onChange(e)} /><br />
        <input type="password" name="password" placeholder="password" value={this.state.password}  onChange={e => this.onChange(e)} /><br />
        <button onClick={() => this.onSubmit()}>Login</button><br />
        <button onClick={() => this.onSubmitAuto()}>Auto Login</button>
      </div>
    )
  }
}

export default Login
