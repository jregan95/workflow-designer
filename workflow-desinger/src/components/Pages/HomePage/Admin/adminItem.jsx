import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <Link to="/workflow">
      <button> Setup Workflow</button>
      </Link>
    </div>
  );
}

export default Admin;
