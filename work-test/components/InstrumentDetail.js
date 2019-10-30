import React, { useState } from 'react'
import { timeTransform } from './TimeTransform'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row} from 'reactstrap';

const InstrumentDetail = (props) => {
  const {
   buttonLabel,
   className
 } = props;

 const [modal, setModal] = useState(false);

 const toggle = () => setModal(!modal);

 return(
   <div>
     <a className="modalTrigger" onClick={toggle} style={{textDecoration: "underline", color:"blue"}}>{props.info.instrument.name || '-'}</a>
       <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
         <ModalHeader toggle={toggle}><h4>{props.info.instrument.name || '-'}</h4></ModalHeader>
         <ModalBody>
          <Row>
           <Col>
             <Table>
              <thead>
                <tr>
                  <th>Info</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Acquisition price</th>
                  <td>{props.info.acquisition_price || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Allocation</th>
                  <td>{props.info.allocation || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Change percent</th>
                  <td>{props.info.change_percent || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Kind</th>
                  <td>{props.info.instrument.kind || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Created at</th>
                  <td>{timeTransform(props.info.created_at) || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Rating</th>
                  <td>{props.info.instrument.rating || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Identifier</th>
                  <td>{props.info.instrument.identifier || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Slug</th>
                  <td>{props.info.instrument.slug || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Currency</th>
                  <td>{props.info.instrument.currency || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Country</th>
                  <td>{props.info.instrument.country || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Isin</th>
                  <td>{props.info.instrument.isin || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Model</th>
                  <td>{props.info.instrument.model || '-'}</td>
                </tr>
              </tbody>
            </Table>
            <Card>
              <CardBody>
                <CardTitle style={{fontWeight: "bold"}}>About the company:</CardTitle>
                <CardText>{props.info.instrument.company ? props.info.instrument.company.description : null || '-'}</CardText>
              </CardBody>
            </Card>
           </Col>
           <Col>
            <Table>
              <thead>
                <tr>
                  <th>Price today:</th>
                  <th>{props.info.instrument.price_today || '-'} ({props.info.instrument.currency || '-'})</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Price low</th>
                  <td>{props.info.instrument.price_low || '-'} ({props.info.instrument.currency || '-'})</td>
                </tr>
                <tr>
                  <th scope="row">Price high</th>
                  <td>{props.info.instrument.price_high || '-'} ({props.info.instrument.currency || '-'})</td>
                </tr>
                <tr>
                  <th scope="row">Price open</th>
                  <td>{props.info.instrument.price_open || '-'} ({props.info.instrument.currency || '-'})</td>
                </tr>
                <tr>
                  <th scope="row">Price close</th>
                  <td>{props.info.instrument.price_close || '-'} ({props.info.instrument.currency || '-'})</td>
                </tr>
                <tr>
                  <th scope="row">Week 52 high</th>
                  <td>{props.info.instrument.week_52_high || '-'} ({props.info.instrument.currency || '-'})</td>
                </tr>
                <tr>
                  <th scope="row">Week 52 low</th>
                  <td>{props.info.instrument.week_52_low || '-'} ({props.info.instrument.currency || '-'})</td>
              </tr>
            </tbody>
            </Table>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Money</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 Day</th>
                  <td>{props.info.instrument.yield_1d || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">1 Week</th>
                  <td>{props.info.instrument.yield_1w || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">1 Month</th>
                  <td>{props.info.instrument.yield_1m || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">3 Months</th>
                  <td>{props.info.instrument.yield_3m || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">6 Months</th>
                  <td>{props.info.instrument.yield_6m || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">1 Year</th>
                  <td>{props.info.instrument.yield_1y || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">2 Years</th>
                  <td>{props.info.instrument.yield_2y || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">3 Years</th>
                  <td>{props.info.instrument.yield_3y || '-'}</td>
                </tr>
                <tr>
                  <th scope="row">5 Years</th>
                  <td>{props.info.instrument.yield_5y || '-'}</td>
                </tr>
              </tbody>
            </Table>
           </Col>
          </Row>
         </ModalBody>
         <ModalFooter>
          <h4>Year Total: {props.info.instrument.yield_ty || '-'} ({props.info.instrument.currency || '-'})</h4>
         </ModalFooter>
       </Modal>
   </div>
 )
}

export default InstrumentDetail
