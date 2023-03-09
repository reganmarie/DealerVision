import React, { useEffect, useState } from 'react';

function ServicesList(props) {

    const [services, setServices] = useState([]);

    const fetchData = async () => {
        const serviceUrl = 'http://localhost:8080/api/services'
        const response = await fetch(serviceUrl);

        if (response.ok) {
            const data = await response.json();
            setServices(data.services)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const finishService = async (id) => {
        const serviceDetailUrl = `http://localhost:8080/api/services/${id}/`
        const fetchConfig = {
            method: "put",
            body: JSON.stringify({"finish": true}),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(serviceDetailUrl, fetchConfig)
        if (response.ok) {
            const index = services.findIndex((service) => service.id === id);
            const updatedServices = [...services];
            updatedServices[index] = {...updatedServices[index], finish:true};
            setServices(updatedServices);
        }
    }

    const cancelService = async (id) => {
        const serviceDetailUrl = `http://localhost:8080/api/services/${id}/`
        const fetchConfig = {
            method: "delete",
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(serviceDetailUrl, fetchConfig)
        if (response.ok) {
            fetchData();
        }
    }

    return (
        <div>
        <h1>Service appointments</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Owner Name</th>
                    <th>Date Time</th>
                    <th>Assigned Technician</th>
                    <th>Reason</th>
                    <th>Complete</th>
                    <th>Cancel</th>
                    <th>VIP</th>
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
                            <td>
                                <button type="button" className="btn btn-success" onClick={() => finishService(service)}>Finish</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => cancelService(service)}>Cancel</button>
                            </td>
                            <td>{ service.isVip ? "yes" : "no" }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default ServicesList;