
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./../styles/List.css";

const ProjectList = ({ projects,isPending,error }) => {
  
  return (
    
      
    <div className="container-lg">
      {isPending&&<div className="loading">Loading...</div>}
      <h1 className="title"> Projects</h1>
      <Link to="/createproject">
        <button className="btn btn-success btn-lg btn-create-project ">
        
          Create Project
        </button>
      </Link>
      <table className="table table-light table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
           
            <th>Actions</th>
          </tr>
        </thead>
        {projects.map((project) => (
          <tbody key={[project.id,project.name]}>
            <tr>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td className="icons">
                <Link to={`/projects/${project.id}`}>
                  <i  title="Show Project" className="glyphicon glyphicon-eye-open "></i>
                </Link>
                <i title="Edit Project" className="glyphicon glyphicon-edit"></i>
               
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      ;
    </div>
 
  );
};
export default ProjectList;

