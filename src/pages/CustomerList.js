
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./../styles/List.css"
import "./../styles/CustomerList.css"
const CustomerList = ({customers}) => {
 
  
  return (
    <div className="container-lg ">
      <h1 className="title">Customers</h1>
      
      <Link to="/createcustomer">
        <button className="btn btn-create btn-success btn-lg  ">
          Create Customer
        </button>
        </Link>
      <table className="table table-light table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Atcions</th>
          </tr>
        </thead>
        {customers.map((customer) => (
          <tbody key={customer.id}>
            <tr>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
               <td className="icons">         
              <Link to={`/customers/${customer.id}`}> 
                <i title="Show Customer" className="glyphicon glyphicon-eye-open"></i></Link>            
                  <i  title="Edit Project" className="glyphicon glyphicon-edit"></i>    
              </td>
            </tr>
          </tbody>
        ))}</table>
        ;
    </div>

  );
};
export default CustomerList;

{
  /*useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);*/
  /* <h1 className="title">Projects</h1>
      <button className="btn btn-success btn-lg " 
        onClick={()=> console.log("Hello Marco")}>
         Create Project
      </button>
      <table className="table table-light table-hover" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Customer</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>MaxiomLogs</td>
            <td>the best way to manage your time</td>
            <td>1</td>
            <td>2023-02-07T00:45:50.417Z</td>
          </tr>
          <tr>
            <td>2</td>
            <td>BMW WebSite</td>
            <td>BMW|Best Cars in the world</td>
            <td>2</td>
            <td>2021-02-17T13:41:10.149Z</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mercedes</td>
            <td>The most Polpular Cars in the World</td>
            <td>3</td>
            <td>2021-02-17T13:41:10.149Z</td>
          </tr>
        </tbody>
  </table>*/
}
