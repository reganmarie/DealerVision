import React, {useEffect, useState } from 'react';

function NewSalesRecordForm() {

  const [automobile, setAutomobile] = useState('');
  const handleAutomobileChange = event => setAutomobile(event.target.value);

  const [autos, setAutomobiles] = useState([]);

  const [salesPerson, setSalesPerson] = useState('');
  const handleSalesPersonChange = event => setSalesPerson(event.target.value);

  const [salesPersons, setSalesPersons] = useState([]);

  const [customer, setCustomer] = useState('');
  const handleCustomerChange = event => setCustomer(event.target.value);

  const [customers, setCustomers] = useState([]);

  const[price, setPrice] = useState('');
  const handlePriceChange = event => setPrice(event.target.value)

  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const url = 'http://localhost:8090/api/salesrecords/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setRecords(data.sales_records);
    }
  }

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchAutomobiles = async () => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.autos);
    }
  }

  useEffect(() => {
    fetchAutomobiles();
  }, []);

  const fetchSalesPersons = async () => {
    const url = 'http://localhost:8090/api/salesperson/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalesPersons(data.salesperson);
    }
  }

  useEffect(() => {
    fetchSalesPersons();
  }, []);

  const fetchCustomers = async () => {
    const url = 'http://localhost:8090/api/customers/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.automobile = automobile;
    data.salesperson = salesPerson;
    data.customer = customer;
    data.price = price;

    const salesRecordUrl = 'http://localhost:8090/api/salesrecords/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(salesRecordUrl, fetchOptions);
    if (response.ok) {
        const newSalesRecord = await response.json();
        setAutomobile('');
        setSalesPerson('');
        setCustomer('');
        setPrice('');
    }
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a sales record</h1>
          <form onSubmit={handleSubmit} id="create-salesrecord-form">
          <div className="mb-3">
              <select onChange={handleAutomobileChange} value={automobile} required name="automobile" id="automobile" className="form-select">
                <option value="">Choose an Automobile</option>
                {autos.filter(auto => {
                  for (let record of records) {
                    if (auto.vin === record.automobile.vin) {
                      return false;
                    }
                  }
                  return true;
                }).map(auto => {
                    return (
                      <option key={auto.id} value={auto.href}>{auto.vin}</option>
                    )
                  })}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handleSalesPersonChange} value={salesPerson} required name="salesperson" id="salesperson" className="form-select">
                <option value="">Choose a Sales Person</option>
                {salesPersons.map(salesperson => {
                  return (
                    <option key={salesperson.id} value={salesperson.name}>{salesperson.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handleCustomerChange} value={customer} required name="customer" id="customer" className="form-select">
                <option value="">Choose a customer</option>
                {customers.map(customer => {
                  return (
                    <option key={customer.id} value={customer.id}>{customer.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handlePriceChange} value={price} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewSalesRecordForm;
