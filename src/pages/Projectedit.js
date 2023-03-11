import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import '../styles/Projectedit.css'
const Projectedit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { name, description };
    
    fetch('http://localhost:3001/projects', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    }).then(() => {
     history('/')

    })
  }

  return (
    <div className="form-container ">

      <h2 className="title">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="project-name">Project Name:</label>
          <input className="form-control"
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="form-group">
        <label>Project Description</label>
        <textarea className="form-control" rows="5"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea></div>
       
        <button className="btn btn-success btn-lg">Create Project</button>
      </form>
    </div>
  );
}
 
export default Projectedit;


 /*<label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>*/