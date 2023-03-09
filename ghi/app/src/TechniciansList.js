function TechniciansList (props) {
    return (
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
            {props.technicians.map(technician => {
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
      );

}

export default TechniciansList;