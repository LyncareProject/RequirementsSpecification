import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequirementsPage from './pages/Requirements/Requirements';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/requirements' element={<RequirementsPage />} />
        <Route path='/requirements/:page' element={<RequirementsPage />} />
      </Routes>
    </div>
  );
}

export default App;
