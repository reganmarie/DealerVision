function TechniciansList (props) {
    return (
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
      );

}

export default TechniciansList;