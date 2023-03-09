import React, {useEffect, useState} from 'react';
import ServicesList from './ServicesList';

function HistoryList(props) {
    cosnt [services, setServices] = useState([]);

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
    }, [])
    
    return (
        <div>
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
                {props.services.map(service => {
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