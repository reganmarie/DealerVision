import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListModels from './ModelList';
import NewModelForm from './ModelForm';
import ListAutomobiles from './AutomobileList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
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
