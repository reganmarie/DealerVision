import React, {useEffect, useState } from 'react';

function SalesRecordsBySalesPerson() {
    const [salesperson, setSalesPerson] = useState('');
    const handleSalesPersonChange = event => setSalesPerson(event.target.value);

    const [salespersons, setSalesPersons] = useState([]);

    const [salesrecords, setSalesRecords] = useState([]);

    useEffect(() => {
        const fetchSalesRecords = async () => {
            const url = 'http://localhost:8090/api/salesrecords/';
            const response = await fetch(url);

            const data = await response.json();

            if (response.ok) {
                setSalesRecords(data.sales_records);
            }
        };
        fetchSalesRecords();
    }, []);

    useEffect(() => {
        const fetchSalesPersons = async () => {
            const url = 'http://localhost:8090/api/salesperson/';
            const response = await fetch(url);

            const data = await response.json();

            if (response.ok) {
                setSalesPersons(data.salesperson);
            }
        };
        fetchSalesPersons();
    }, []);

    return (
        <>
        <select onChange={handleSalesPersonChange} value={salesperson} required name="salesperson" id="salesperson" className="form-select">
                <option value="">Choose a Sales Person</option>
                {salespersons.map(salesperson => {
                  return (
                    <option key={salesperson.id} value={salesperson.name}>{salesperson.name}</option>
                  )
                })}
              </select>
        <div>
            <h1>Sales person history</h1>
        </div>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Sales person</th>
                        <th>Customer</th>
                        <th>Vin</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {salesrecords.filter(salesrecord => {
                    if (salesperson === '') {
                        return salesrecord;
                    } else {
                        return salesrecord.salesperson.name === salesperson;
                    }
                }).map((salesrecord) => {
                    return (
                    <tr key={salesrecord.id}>
                        <td>{salesrecord.salesperson.name}</td>
                        <td>{salesrecord.customer.name}</td>
                        <td>{salesrecord.automobile.vin}</td>
                        <td>{salesrecord.price}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}
export default SalesRecordsBySalesPerson;
