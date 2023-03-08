import React from 'react';

function ServicesList(props) {
    return (
        <div>
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
                            {/* <td>
                                <button type="button" className="btn btn-danger" onClick={() => cancelservice(service)}>Cancel</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-success" onClick={() => completeservice(service)}>Finished</button>
                            </td> */}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default ServicesList;