import React, {useEffect, useState} from 'react';

function ServiceForm () {
    const [autos, setAutos] = useState([])
    const [technicians, setTechnicians] = useState([])

    const [ownerName, setOwnerName] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [reason, setReason] = useState('')
    const [vin, setVin] = useState('')
    const [technician, setTechnician] = useState('')
    const [auto, setAuto] = useState('')

    const handleOwnerNameChange = (event) => {
        const value = event.target.value;
        setOwnerName(value)
    }
    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value)
    }
    const handleReasonChange = (event) => {
        const value = event.target.value;
        setDateTime(value)
    }
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value)
    }
    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value)
    }
    const handleAutoChange = (event) => {
        const value = event.target.value;
        setAuto(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.owner_name = ownerName
        data.date_time = dateTime
        data.reason = reason
        data.vin = vin
        data.technician = technician
        data.auto = auto

        const serviceUrl = 'http://localhost:8080/api/services/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const serviceResponse = await fetch(serviceUrl, fetchConfig);
        if (serviceResponse.ok) {
            const newService = await serviceResponse.json();

            setOwnerName('');
            setDateTime('');
            setReason('');
            setVin('');
            setTechnician('');
            setAuto('');
        }
    }

    const fetchData = async () => {
        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const techUrl = 'http://localhost:8080/api/technicians/';
        const autoResponse = await fetch(autoUrl);
        const techResponse = await fetch(techUrl);
        if (autoResponse.ok && techResponse.ok) {
            const autoData = await autoResponse.json();
            const techData = await techResponse.json();
            setAutos(autoData.autos);
            setTechnicians(techData.technicians);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Enter a service appointment</h1>
                <form onSubmit={handleSubmit} id="create-shoe-form">

                <div className="form-floating mb-3">
                    <input onChange={handleOwnerNameChange} value={ownerName} placeholder="Owner Name" required type="text" name="owner_name" id="owner_name" className="form-control" />
                    <label htmlFor="owner_name">Owner Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleDateTimeChange} value={dateTime} placeholder="Date Time" required type="text" name="date_time" id="date_time" className="form-control" />
                    <label htmlFor="date_time">Date Time YYYY-MM-DD HH:MM AM/PM</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleReasonChange} value={reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control" />
                    <label htmlFor="reason">Reason</label>
                </div>
                <div className="mb-3">
                    <select onChange={handleTechnicianChange} value={technician} required id="technician" name="technician" className="form-select">
                        <option value="">Assign a technician</option>
                        {technicians.map(technician => {
                            return(
                                <option key={technician.id} value={technician.id}>
                                    {technician.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={handleAutoChange} value={auto} required id="auto" name="auto" className="form-select">
                        <option value="">Choose a VIN</option>
                        {autos.map(auto => {
                            return(
                                <option key={auto.href} value={auto.href}>
                                    {auto.vin}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <p>OR</p>
                <div className="form-floating mb-3">
                    <input onChange={handleVinChange} value={vin} placeholder="vin" required type="text" vin="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">Enter VIN</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
        </div>
    );

}

export default ServiceForm;