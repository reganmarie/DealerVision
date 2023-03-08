import React, { useState, useEffect } from 'react';

function ListModels(props) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8100/api/models/';

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        const models = data.models;
        setModels(models);
      } else {
        console.log('error');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Picture</th>
            <th>Manufacturer Name</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => {
            return (
              <tr key={model.href}>
                <td>{model.name}</td>
                <td>
                  <img src={model.picture_url} className="img-thumbnail" alt={model.name} />
                </td>
                <td>{model.manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListModels;
