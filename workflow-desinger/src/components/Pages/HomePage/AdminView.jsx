import { Link } from "react-router-dom";
import './styles/AdminView.css'

function Admin() {
  
  return (
    <div className="admin">

      <h2 className="admin-title">Admin View</h2>

      <Link to="/workflow">
        <button className="setup-btn"> Setup Workflow</button>
      </Link>

    </div>
  );
}

export default Admin;
