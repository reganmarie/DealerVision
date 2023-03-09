import React, {useEffect, useState} from 'react';

function ServiceForm () {
    const [autos, setAutos] = useState([])
    const [technicians, setTechnicians] = useState([])

    const [ownerName, setOwnerName] = useState('')
    const [date, setDate] = useState('')
    const [reason, setReason] = useState('')
    // const [vin, setVin] = useState('')
    const [technician, setTechnician] = useState('')
    const [auto, setAuto] = useState('')

    const handleOwnerNameChange = (event) => {
        const value = event.target.value;
        setOwnerName(value)
    }
    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value)
    }
    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value)
    }
    // const handleVinChange = (event) => {
    //     const value = event.target.value;
    //     setVin(value)
    // }
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
        data.date = date
        data.reason = reason
        // data.vin = vin
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
            setDate('');
            setReason('');
            // setVin('');
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
                    <input onChange={handleDateChange} value={date} placeholder="date" required type="datetime" name="date" id="date" className="form-control" />
                    <label htmlFor="date">Date YYYY-MM-DD HH:MM</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea onChange={handleReasonChange} value={reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control"></textarea>
                    <label htmlFor="reason">Reason</label>
                </div>
                <div className="mb-3">
                    <select onChange={handleTechnicianChange} value={technician} required id="technician" name="technician" className="form-select">
                        <option value="">Assign a technician</option>
                        {technicians.map(technician => {
                            return(
                                <option key={technician.name} value={technician.name}>
                                    {technician.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={handleAutoChange} value={auto} id="auto" name="auto" className="form-select">
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
                {/* <p>OR</p>
                <div className="form-floating mb-3">
                    <input onChange={handleVinChange} value={vin} placeholder="vin" type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">Enter VIN</label>
                </div> */}
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
        </div>
    );

}

export default ServiceForm;