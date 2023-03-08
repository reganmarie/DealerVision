import React, { useState, useEffect } from 'react';

function ListAutomobiles(props) {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8100/api/automobiles/';

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        const autos = data.autos;

        setAutos(autos);
      } else {
        console.log('error');
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div>
        <h1>Automobiles in Inventory</h1>
    </div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Vin</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => {
            return (
              <tr key={auto.href}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
                <td>
                  <img src={auto.model.picture_url} className="figure-img img-fluid rounded" alt={auto.model.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListAutomobiles;
