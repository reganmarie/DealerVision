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
import ListModels from './ModelList';
import NewModelForm from './ModelForm';
import ListAutomobiles from './AutomobileList';

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
          <Route path="models">
            <Route index element={<ListModels />} />
            <Route path="new" element={<NewModelForm />} />
          </Route>
          <Route path="automobiles" element={<ListAutomobiles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
