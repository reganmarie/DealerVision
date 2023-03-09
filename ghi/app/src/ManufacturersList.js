function ManufacturerList (props) {
    return (
      <div>
        <h1>Manufacturers</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {props.manufacturers.map(manufacturer => {
              return (
                <tr key={manufacturer.id}>
                  <td>{ manufacturer.name }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      );

}

export default ManufacturerList;