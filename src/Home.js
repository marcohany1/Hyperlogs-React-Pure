import React from 'react';

import './styles/Home.css';
import ProjectList from './pages/ProjectList';
import CustomerList from './pages/CustomerList';


const Home = ({projects,customers}) => {
  
 return (
    <div className="container-lg ">
      { projects && <ProjectList projects={projects} /> }
      {customers&&<CustomerList customers={customers} />} 

    </div>
  );
}


export default Home;
  /*const handleDelete=(id)=>{
    const newProject=projects.filter(project=>project.id !==id)
    
  }*/

/*[
     {
      id: 1,
      name: "MaxiomLogs",
      description: "the best way to manage your time",
      customerId: 1,
      createdAt: "2023-02-14T13:41:10.149Z"
      
    },
    {
      id: 2,
      name: "BMW WebSite",
      description: "BMW|Best Cars in the world",
      customerId:3,
      createdAt: "2021-02-17T13:41:10.149Z"
      
    },
    {
      id:3,
      name: "BMW WebSite",
      description: "BMW|Best Cars in the world",
      customerId:3,
      createdAt: "2021-02-17T13:41:10.149Z"
    }
  ]);*/
  
/*const[projects,setProjects]=useState(null);
const[customers,setCustomers]=useState(null);

useEffect(() => {
  fetch("http://localhost:3001/projects")  
  .then(res => {
    return (res.json())
  })
  .then(data => {
setProjects(data) 
 })
},[])
useEffect(() => {
  fetch("http://localhost:3001/customers")  
  .then(res => {
    return (res.json())
  })
  .then(data => {
setCustomers(data) 
 })
},[])*/

  