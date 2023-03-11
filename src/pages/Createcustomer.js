import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import '../styles/Create.css'
const Createcustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const[isPending,setisPending]=useState(false)
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = { name, email,address };
    setisPending(true);
    fetch('http://localhost:3001/customers', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    }).then(() => {
      // history.go(-1);
      setisPending(false)
       history('/customers')
    })
  }

  return (
    <div className="form-container ">
       { isPending && <div>Loading...</div> }
      
      <h2 className="title">Create a New Customer</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label className="project-name"> Name:</label>
          <input className="form-control"
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="form-group">
        <label>Email</label>
       <input className="form-control"
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /></div>
            <div className="form-group">
        <label>Address</label>
       <input className="form-control"
            type="text" 
            required 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /></div>
       
        <button className="btn btn-success btn-lg">Create Customer</button>
      </form>
    </div>
  );
}
 
export default Createcustomer;


 /*<label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>*/