import React, { Component } from 'react';
import Pagination from './Pagination';
import Modal from './Modal';

class Table extends Component {

   state = {
      modalOpen: false
   }

   openModal = (imdbID) => {
      this.setState({ modalOpen: true, imdbID: imdbID });
   }

   closeModal = () => {
      this.setState({ modalOpen: false });
   }

   renderTableHeader() {
      if (this.props.data && this.props.data.length > 0) {
         let header = Object.keys(this.props.data[0])
         return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
         })
      }
      return null;
   }

   renderTableData() {
      if (this.props.data) {
         return this.props.data.map((data) => {
            const { Title, Year, imdbID, Type, Poster } = data
            return (
               <tr onClick={() => this.openModal(imdbID)}>
                  <td> <a href="#"></a>{Title}</td>
                  <td>{Year}</td>
                  <td>{imdbID}</td>
                  <td>{Type}</td>
                  <td><img src={Poster} width='50' height='80' className='img-responsive' /> </td>
               </tr>
            )
         })
      }
   }




   render() {
      return (
         <div className='container'>
            <Modal isOpen={this.state.modalOpen} imdbID={this.state.imdbID} closeModal={this.closeModal} />
            <h1 id='title'>Movies Data Table</h1>
            <table className='table table-bordered table-hover' >
               <thead>{this.renderTableHeader()}</thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
            <Pagination fetchData={this.props.fetchData} total={this.props.total} />
         </div>
      )
   }
}

export default Table