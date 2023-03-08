import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList'
import ManufacturerForm from './ManufacturerForm';
import AutomobileForm from './AutomobileForm';
import ListModels from './ModelList';
import NewModelForm from './ModelForm';
import ListAutomobiles from './AutomobileList';
import NewSalesPersonForm from './SalesPersonForm';
import NewCustomerForm from './CustomerForm';
import ServiceForm from './ServiceForm';
import ServicesList from './ServicesList';
import TechnicianForm from './TechnicianForm';
import TechniciansList from './TechniciansList';

function App(props) {
  if (props.manufacturers === undefined && props.models === undefined && props.automobiles === undefined) {
    return null;
  }


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="manufacturers">
            <Route path="" element={<ManufacturersList manufacturers={props.manufacturers} />} />
          </Route>
          <Route path="automobiles">
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<ListAutomobiles />} />
          </Route>
          <Route path="models">
            <Route index element={<ListModels />} />
            <Route path="new" element={<NewModelForm />} />
          </Route>
          <Route path="salesperson">
            <Route path="new" element={<NewSalesPersonForm />} />
          </Route>
          <Route path="customer">
            <Route path="new" element={<NewCustomerForm />} />
          </Route>
          <Route path="services">
            <Route path="new" element={<ServiceForm />} />
          </Route>
          <Route path="services">
            <Route path="" element={<ServicesList services={props.services} />} />
          </Route>
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="technicians">
            <Route path="" element={<TechniciansList technicians={props.technicians} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
