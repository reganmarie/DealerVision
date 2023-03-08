import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList'
import ManufacturerForm from './ManufacturerForm';
import AutomobileForm from './AutomobileForm';

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
          <Route path="automobile">
            <Route path="new" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
