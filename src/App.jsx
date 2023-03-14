import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add-employee" element={<AddEmployee />}/>
      <Route path="/edit-employee/:id" element={<EditEmployee />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
