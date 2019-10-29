import React from 'react'
import InstrumentDetail from '../components/InstrumentDetail'
import PortfolioDetail from '../components/PortfolioDetail'
import Router from 'next/router'
import {portfolioList} from '../network/Requests.js'


class Profile extends React.Component {

  async componentDidMount() {
    const self = this;
    self.setState(await portfolioList())
  }

  logout(){
    localStorage.clear()
    Router.push('/index')
  }

  render() {
    console.log(this.state);
    if (this.state != null) {
      return (
        <div>
          <button onClick={() => this.logout()}>Logout</button>

          {this.state.results.map(item => (
            <div key={item.alias}>
              <PortfolioDetail />
              <InstrumentDetail />
            </div>
          ))}
        </div>
      )
    }else{
      return(
        <div> Loading... </div>
      )
    }
  }
}

export default Profile
