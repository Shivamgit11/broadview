import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Collectioncmp = () => {
  const collectiondata = [
    {
      SortKey: "collections Today Webiwork 11rty",
      dateDue: "16 Dec 2019",
      name: "rtAAA webi 11rtyrtyyty",
      driver: "ABC Driver",
      vehicle: "Vehicle D",
      id: "13",
    },
    {
      SortKey: "collections Today Webiwork 11rty",
      dateDue: "16 Dec 2019",
      name: "rtAAA webi 11rtyrtyyty",
      driver: "ABC Driver",
      vehicle: "Vehicle D",
      id: "14",
    },
    {
      SortKey: "collections Today Webiwork 11rty",
      dateDue: "16 Dec 2019",
      name: "rtAAA webi 11rtyrtyyty",
      driver: "ABC Driver",
      vehicle: "Vehicle D",
      id: "15",
    },
  ];

  const [value, setValue] = useState("");
  const [datasource, setdatasource] = useState(collectiondata);

  const [tablefilter, settablefilter] = useState([]);

  const filterdata = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = datasource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settablefilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setdatasource([...datasource]);
    }
  };

  return (
    <div>
      <input value={value} onChange={filterdata} />
      <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>vehicle</th>
            <th>driver</th>
            <th>dateDue</th>
            <th>SortKey</th>
          </tr>
        </thead>
        <tbody>
          {/* {collectiondata.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.vehicle}</td>
                <td>{data.driver}</td>
                <td>{data.dateDue}</td>
                <td>{data.SortKey}</td>
              </tr>
            );
          })} */}
          {value.length > 0
            ? tablefilter.map((data) => {
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.vehicle}</td>
                    <td>{data.driver}</td>
                    <td>{data.dateDue}</td>
                    <td>{data.SortKey}</td>
                  </tr>
                );
              })
            : datasource.map((data) => {
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.vehicle}</td>
                    <td>{data.driver}</td>
                    <td>{data.dateDue}</td>
                    <td>{data.SortKey}</td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};

export default Collectioncmp;
