import React, {useEffect, useState} from 'react';


function HistoryList() {
    const [services, setServices] = useState([]);
    const [vin, setVin] = useState('');

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value)
    }

    useEffect(() => {
        const fetchConfig = async () => {
            const serviceUrl = 'http://localhost:8080/api/services/';
            const response = await fetch(serviceUrl);

            if (response.ok) {
                const data = await response.json();
                setServices(data.services);
            }
        }
        fetchConfig();
    }, []);

    const filteredServices = services.filter((service) => {
        if (!vin) {
            return true;
        }
        return service.auto.vin === vin
    })


    return (
        <div>
            <div className="mt-3 mb-3">
                <input type="text" className="btn btn-outline-success" value={vin} id="form1" onChange={handleVinChange} />
                <button onClick={handleVinChange} type="button" className="btn btn-outline-success">Search</button>
            </div>
            <h1>History of Service appointments</h1>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Owner Name</th>
                    <th>Date Time</th>
                    <th>Assigned Technician</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {filteredServices.map(service => {
                    
                    return (
                        <tr key={service.href}>
                            <td>{ service.auto.vin }</td>
                            <td>{ service.owner_name}</td>
                            <td>{ service.date }</td>
                            <td>{ service.technician.name }</td>
                            <td>{ service.reason }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}


export default HistoryList;