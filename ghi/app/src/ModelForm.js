import React, {useEffect, useState } from 'react';

function NewModelForm() {

  const [name, setName] = useState('');
  const handleNameChange = event => setName(event.target.value);

  const [pictureUrl, setPictureUrl] = useState('');
  const handlePictureUrlChange = event => setPictureUrl(event.target.value);

  const [manufacturer, setManufacturer] = useState('');
  const handleManufacturerChange = event => setManufacturer(event.target.value);

  const [manufacturers, setManufacturers] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    data.picture_url = pictureUrl;
    data.manufacturer_id = manufacturer;

    const modelUrl = 'http://localhost:8100/api/models/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(modelUrl, fetchOptions);
    if (response.ok) {
        const newModel = await response.json();

        setName('');
        setPictureUrl('');
        setManufacturer('');
    }
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a vehicle model</h1>
          <form onSubmit={handleSubmit} id="create-model-form">
            <div className="form-floating mb-3">
              <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handlePictureUrlChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
              <label htmlFor="picture_url">Picture URL</label>
            </div>
            <div className="mb-3">
              <select onChange={handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                <option value="">Choose a manufacturer</option>
                {manufacturers.map(manufacturer => {
                  return (
                    <option key={manufacturer.href} value={manufacturer.id}>{manufacturer.name}</option>
                  )
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewModelForm;
