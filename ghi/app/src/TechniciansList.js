import { useEffect, useState } from "react";

function TechniciansList (props) {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/api/technicians/';

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const technicians = data.technicians;
        setTechnicians(technicians);
      } else {
        console.error('error');
      }
    };
    fetchData();
  }, [])

    return (
      <>
        <div>
          <h1>Technicians</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee ID</th>
              </tr>
            </thead>
            <tbody>
              {technicians.map(technician => {
                return (
                  <tr key={technician.id}>
                    <td>{ technician.name }</td>
                    <td>{ technician.id }</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default TechniciansList;