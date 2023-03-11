import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Createproject from "./pages/Createproject";
import Topnavbar from "./pages/Topnavbar";
import Showproject from "./pages/Showproject";
import Home from "./Home";
import ProjectList from "./pages/ProjectList";
import useFetch from "./usefetch";
import CustomerList from "./pages/CustomerList";
import Showcustomer from "./pages/Showcustomer";
import Createcustomer from "./pages/Createcustomer";
const App = () => {
  const { error, isPending, data: projects } = useFetch('http://localhost:3001/projects');
   const{data:customers}=useFetch('http://localhost:3001/customers');
   
 return (
  <Router>
   <div>
      <Topnavbar></Topnavbar>
      { isPending && <div className="loading">Loading...</div> }
      { error && <div>{ error }</div> }
      <Routes>
        <Route exact path="/" element={<Home projects={projects} customers={customers}/>}></Route>
        <Route path="/createproject" element={<Createproject/>}></Route>
         <Route path="/createcustomer" element={<Createcustomer/>}></Route>
         <Route path="/projects" element={projects&&<ProjectList  projects={projects}/> }></Route>
        <Route path="/projects/:id" element={Showproject &&<Showproject /> }></Route>
        <Route path="/customers/:id" element={Showcustomer &&<Showcustomer /> }></Route>
         <Route path="/customers" element={customers&&<CustomerList  customers={customers}/> }></Route>
      </Routes>
 </div>
 </Router>
  );
};

export default App;
