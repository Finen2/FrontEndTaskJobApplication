import React from 'react'
import InstrumentDetail from '../components/InstrumentDetail'
import PortfolioDetail from '../components/PortfolioDetail'
import 'bootstrap/dist/css/bootstrap.css';
import Router from 'next/router'
import { Button, Table, Jumbotron } from 'reactstrap';
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
    if (this.state != null) {
      return (
        <div>
          <Button color="primary" onClick={() => this.logout()}>Logout</Button>
          <Jumbotron>

            <Table>
              <thead>
                <tr>
                  <th>Account number</th>
                  <th>Provider</th>
                  <th>Name</th>
                  <th>Kind</th>
                  <th>Total value</th>
                  <th>Market value</th>
                  <th>Cash</th>
                  <th>Currency</th>
                  <th>Change</th>
                  <th>Visibility</th>
                  <th>Created</th>
                  <th>Positions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.results.map(item => (
                  <tr key={item.alias || '-'}>
                    <td>
                      <PortfolioDetail key={item.alias} info={item} />
                    </td>
                    <td>{item.provider || '-'}</td>
                    <td>{item.name || '-'}</td>
                    <td>{item.kind || '-'}</td>
                    <td>{item.total_value || '-'}</td>
                    <td>{item.market_value || '-'}</td>
                    <td>{item.cash || '-'}</td>
                    <td>{item.currency || '-'}</td>
                    <td>{item.change || '-'}</td>
                    <td>{item.visibility || '-'}</td>
                    <td>{item.created_at || '-'}</td>
                    <td>
                    {item.positions
                    ? item.positions.map(position =>
                        position.instrument.name ? <InstrumentDetail key={position.instrument.id} info={position} /> : null
                      )
                    : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Jumbotron>
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
