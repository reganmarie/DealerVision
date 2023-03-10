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


    async function finishService(service) {
        const finishUrl = `http://localhost:8080${service.href}`;
        const finishResponse = await fetch(finishUrl,
            { method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ finish: true })
        });
        if (finishResponse.ok) {
            const copyServices = [...services];
            const filteredServices = copyServices.filter(s => s.href !== service.href);
            setServices(filteredServices);
        }
    }

    async function cancelService(service) {

        const cancelUrl = `http://localhost:8080${service.href}`

        const cancelResponse = await fetch (cancelUrl, {method: 'delete'})
        if (cancelResponse.ok) {
            const copyServices = [...services];
            const filteredServices = copyServices.filter(s => s.href !== service.href);
            setServices(filteredServices);
            window.location.reload()
        }
    }

    return (
        <>
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
                    {services.map(service => {
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
                                <td>{ service.isVIP ? "yes" : "no" }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default ServicesList;