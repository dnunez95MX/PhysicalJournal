import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import CreateEntry from './components/entries/CreateEntry';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/entries' element={<CreateEntry />} />
    </Routes>
  )
}

export default App;
