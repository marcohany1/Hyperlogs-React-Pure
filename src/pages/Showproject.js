import { useNavigate, useParams } from "react-router-dom";
import "../styles/Showprojects.css";
import useFetch from "../usefetch";
const Showproject = () => {
  const { id } = useParams();
  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:3001/projects/" + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:3001/projects/" + projects.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  return (
    <div>
      {isPending&&<div className="loading">Loading...</div>}
      {projects && (
        <div className="container-lg">
          <h1 className="title"> {projects.name}</h1>
          <ul className="list-group ">
            <li className="list-group-item list-group-item-dark "><span>ID:</span>{projects.id}</li>
            <li className="list-group-item list-group-item-dark"><span>Name:</span>{projects.name}</li>
            <li className="list-group-item list-group-item-dark"><span>Description:</span>{projects.description}</li>
            <li className="list-group-item list-group-item-dark" >
            <button className="btn btn-success btn-lg" onClick={handleClick}>
           Delete Project</button> </li>
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default Showproject;
