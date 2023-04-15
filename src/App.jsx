//import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from "./components/Home";
// import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/EditEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "./pages1/Home1";
import AddEmployee1 from "./pages1/AddEmployee1";
import EditEmployee1 from "./pages1/EditEmployee1";

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/add-employee" element={<AddEmployee />}/>
    //   <Route path="/edit-employee/:id" element={<EditEmployee />}/>
    // </Routes>
    // </BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/add-employee1" element={<AddEmployee1 />} />
        <Route path="/edit-employee1/:id" element={<EditEmployee1 />} />
      </Routes>
    </Router>
  );
}

export default App;
