import React, {useEffect, useState} from 'react';

function TechnicianForm () {
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleIdChange = (event) => {
        const value = event.target.value;
        setId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;
        data.id = id;

        const techUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const techResponse = await fetch(techUrl, fetchConfig);
        if (techResponse.ok) {
            const newTechnician = await techResponse.json();

            setName('');
            setId('');
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a technician</h1>
                <form onSubmit={handleSubmit} id="create-technician-form">

                <div className="form-floating mb-3">
                    <input onChange={handleNameChange} value={name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleIdChange} value={id} placeholder="id" required type="text" name="id" id="id" className="form-control" />
                    <label htmlFor="id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default TechnicianForm;