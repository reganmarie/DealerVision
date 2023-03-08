import React, {useState } from 'react';

function NewSalesPersonForm() {

  const [name, setName] = useState('');
  const handleNameChange = event => setName(event.target.value);

  const [employeeNumber, setEmployeeNumber] = useState('');
  const handleEmployeeNumberChange = event => setEmployeeNumber(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    data.employee_number = employeeNumber;

    const salesPersonUrl = 'http://localhost:8090/api/salesperson/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(salesPersonUrl, fetchOptions);
    if (response.ok) {
        const newSalesPerson = await response.json();

        setName('');
        setEmployeeNumber('');
    }
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a New Sales Person</h1>
          <form onSubmit={handleSubmit} id="create-model-form">
            <div className="form-floating mb-3">
              <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleEmployeeNumberChange} value={employeeNumber} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewSalesPersonForm;
