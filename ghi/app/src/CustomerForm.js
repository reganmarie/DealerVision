import React, {useState } from 'react';

function NewCustomerForm() {

  const [name, setName] = useState('');
  const handleNameChange = event => setName(event.target.value);

  const [address, setAddress] = useState('');
  const handleAddressChange = event => setAddress(event.target.value);

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = event => setPhoneNumber(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    data.address = address;
    data.phone_number = phoneNumber

    const customerUrl = 'http://localhost:8090/api/customers/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(customerUrl, fetchOptions);
    if (response.ok) {
        const newCustomer = await response.json();

        setName('');
        setAddress('');
        setPhoneNumber('');
    }
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a New Customer</h1>
          <form onSubmit={handleSubmit} id="create-model-form">
            <div className="form-floating mb-3">
              <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleAddressChange} value={address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
              <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
              <label htmlFor="phone_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewCustomerForm;
