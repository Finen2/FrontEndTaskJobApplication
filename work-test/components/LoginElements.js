import React from 'react'
import {authenticationInital} from '../network/Requests.js'

function autoLogin(){
  authenticationInital("warren.buffet@willandskill.se", "berkshirehathaway2018")
}

function manuallLogin(){
  authenticationInital(email, password)
}

const Profile = () => (
  <div>
    <input type="email" name="email" placeholder="email" /><br />
    <input type="password" name="password" placeholder="password" /><br />
    <button onClick={manuallLogin}>Login</button><br />
    <button onClick={autoLogin}>Auto Login</button>
  </div>
)

export default Profile

// refresh shuold trigger refresh function

//
