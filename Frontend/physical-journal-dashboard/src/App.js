import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Entries from './components/entries/Entries';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/entries' element={<Entries />} />
    </Routes>
  )
}

export default App;
