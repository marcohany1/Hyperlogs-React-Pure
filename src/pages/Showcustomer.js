import { useNavigate, useParams } from "react-router-dom";
import '../styles/Showcustomers.css'
import useFetch from "../usefetch";
const Showcustomer = () => {
  const { id } = useParams();
  const { data: customers, error, isPending } = 
  useFetch('http://localhost:3001/customers/' + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3001/customers/' + customers.id, {
      method: 'DELETE'
    }).then(() => {
      history('/');
    }) 
  }

  return (
   <div>
     { isPending && <div className="loading">Loading...</div> }
     
     {customers && (
        <div className="container-lg">
          <h1 className="title"> {customers.name}</h1>
          <ul className="list-group ">
            <li className="list-group-item list-group-item-dark "><span>ID:</span>{customers.id}</li>
            <li className="list-group-item list-group-item-dark"><span>Name:</span>{customers.name}</li>
            <li className="list-group-item list-group-item-dark"><span>Email:</span>{customers.email}</li>
             <li className="list-group-item list-group-item-dark"><span>Address:</span>{customers.address}</li>
            <li className="list-group-item list-group-item-dark" >
            <button className="btn btn-success btn-lg" onClick={handleClick}>
           Delete customer</button> </li>
          </ul> </div>
          
     )}</div>
  );
}
 
export default Showcustomer;

