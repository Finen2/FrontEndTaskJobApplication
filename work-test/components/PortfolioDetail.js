import React, { useState } from 'react'
import InstrumentDetail from './InstrumentDetail'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

const PortfolioDetail = (props) => {
  const {
   buttonLabel,
   className
 } = props;

 const [modal, setModal] = useState(false);
 const [nestedModal, setNestedModal] = useState(false);
 const [closeAll, setCloseAll] = useState(false);

 const toggle = () => setModal(!modal);
 const toggleNested = () => {
   setNestedModal(!nestedModal);
   setCloseAll(false);
 }
 const toggleAll = () => {
   setNestedModal(!nestedModal);
   setCloseAll(true);
 }

 return(
   <div>
     <a onClick={toggle} style={{textDecoration: "underline", color:"blue"}}>{props.info.account_number || '-'}</a>
       <Modal isOpen={modal} toggle={toggle} className={className}>
         <ModalHeader toggle={toggle}>{props.info.name || '-'}</ModalHeader>
         <ModalBody>
           <Table>
            <thead>
              <tr>
                <th>Info</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Account number</th>
                <td>{props.info.account_number}</td>
              </tr>
              <tr>
                <th scope="row">Provider</th>
                <td>{props.info.provider}</td>
              </tr>
              <tr>
                <th scope="row">Name</th>
                <td>{props.info.name}</td>
              </tr>
              <tr>
                <th scope="row">Kind</th>
                <td>{props.info.kind}</td>
              </tr>
              <tr>
                <th scope="row">Total value</th>
                <td>{props.info.total_value}</td>
              </tr>
              <tr>
                <th scope="row">Market value</th>
                <td>{props.info.market_value}</td>
              </tr>
              <tr>
                <th scope="row">Cash</th>
                <td>{props.info.cash}</td>
              </tr>
              <tr>
                <th scope="row">Currency</th>
                <td>{props.info.currency}</td>
              </tr>
              <tr>
                <th scope="row">Change</th>
                <td>{props.info.change}</td>
              </tr>
              <tr>
                <th scope="row">Visibility</th>
                <td>{props.info.visibility}</td>
              </tr>
              <tr>
                <th scope="row">Created at</th>
                <td>{props.info.created_at}</td>
              </tr>
              <tr>
                <th scope="row">Positions</th>
                <td>
                {props.info.positions
                ? props.info.positions.map(position =>
                    position.instrument.name ? <InstrumentDetail key={position.instrument.id} info={position} /> : null
                  )
                : null}
                </td>
              </tr>
            </tbody>
          </Table>
         </ModalBody>
         <ModalFooter>
           
         </ModalFooter>
       </Modal>
   </div>
 )
}

export default PortfolioDetail
