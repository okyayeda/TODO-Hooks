import React,{useState} from "react";
import { Table } from 'reactstrap';
function Tables(props) {
 
  return (
    <div className="container d-table w-50 mb-5">
      <h4 className="card-title text-center  display-5">İçerikler Tablosu</h4>
      <hr />
      <Table bordered striped style={{ width: "450px", fontSize:"25px"}}   >
        <thead className='border-primary border-1'>
          
          <tr>
            <th>id</th>
            <th >Ad</th>
            <th>Soyad</th>
            <th>içerik</th>
          </tr>
              </thead>
              <tbody className='border-primary border-1'>
          {props.info.map((info) => (
            <>
              <tr>
              <td>{info.id }</td>
                <td>{info.name}</td>
                <td>{info.surname}</td>
                <td>{info.bookInfo}</td>
               

              </tr>
                  </>
                ))}

        
                  </tbody>
      </Table>
    </div>
  );
}

export default Tables;
