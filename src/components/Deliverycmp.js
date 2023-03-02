import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

const Deliverycmp = () => {
  const deliverydata = [
    {
      SortKey: "Paid Aasasd",
      dateDue: "July 12, 2021 01:15:00",
      name: "Jon Cina A asdasd",
      driver: "BCA Driver",
      vehicle: "Vehicle",
      id: "10",
    },
    {
      SortKey: "Paid Today AAAA 1",
      dateDue: "July 25, 2021 01:15:00",
      name: "Marten AAAA 1",
      driver: "ABC Driver",
      vehicle: "Vehicle B",
      id: "11",
    },
    {
      SortKey: "Paid Today 122",
      dateDue: "July 13, 2021 01:15:00",
      name: "Malicon webiwork 112",
      driver: "ABC Driver",
      vehicle: "Vehicle D",
      id: "12",
    },
    {
      SortKey: "Paid Aasasd",
      dateDue: "July 10, 2021 01:15:00",
      name: "Jon Cina A asdasd",
      driver: "BCA Driver",
      vehicle: "Vehicle",
      id: "10",
    },
    {
      SortKey: "Paid Today AAAA 1",
      dateDue: "July 20, 2021 01:15:00",
      name: "Marten AAAA 1",
      driver: "ABC Driver",
      vehicle: "Vehicle B",
      id: "11",
    },
    {
      SortKey: "Paid Today 122",
      dateDue: "July 21, 2021 01:15:00",
      name: "Malicon webiwork 112",
      driver: "ABC Driver",
      vehicle: "Vehicle D",
      id: "12",
    },
  ];

  const [value, setValue] = useState("");
  const [datasource, setdatasource] = useState(deliverydata);

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

export default Deliverycmp;
