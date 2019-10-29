import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron } from 'reactstrap';
import Login from '../components/LoginElements'

const Home = () => (
  <div className="hello">
    <Jumbotron>
      <Login />
    </Jumbotron>
  </div>
)

export default Home
