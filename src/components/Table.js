// import React, { useEffect, useState } from "react";
import Api from './Tableapi.json'
import { Table } from "react-bootstrap";


const Tables = () => {
// const [Data, setData] = useState([]);
// const [count,Setcount]=useState(1)
// useEffect(() => {
//   return async function TableData() {
//     const res = await fetch(
//       "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
//       );
//       const get = await res.json();
//       Setcount(count+1)
//       setData([get]);
//       console.log(get)
    
//     };
//   },[count]);
  return (
  
    <Table striped bordered hover>

      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      {Api.map((element,index) => {
        return<tbody key={index}>
        <tr>
          <td>{index}</td>
          <td>{element.firstName}</td>
          <td>{element.lastName}</td>
          <td>{element.email}</td>
        </tr>
      </tbody>;
      })}
    </Table>
  );
};

export default Tables;
