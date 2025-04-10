import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/dashboard.component';
import Entries from './components/entries/entries.component';
import { useEffect } from 'react';
import api from './api/apiconfig'

const App = () => {
  useEffect(() => {
    let test = async () => {
      try{
        const response = await api.get(`${process.env.REACT_APP_API_HOST}`)
        console.log(response)
        
      } catch (error){

      }
    }
  })

  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/entries' element={<Entries />} />
    </Routes>
  )
}

export default App;
