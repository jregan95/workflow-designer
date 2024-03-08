import './Nav.css'
import { useLocation
 } from 'react-router-dom';
 import { Link } from 'react-router-dom';
function NavBar({adminView, setAdminView}) {
  const location = useLocation();

  const toggleAdminView = () => {
    setAdminView(!adminView); 
  };

  return (
    <div className="top-nav">
      <h3 className="title">
       Workflow
       </h3>
       {location.pathname !== "/" ? (
        <Link to="/">
        <button className="view-btn" onClick={() => setAdminView(false)}>
          Home
        </button>
        </Link>
      ) : (
        <button className="view-btn" onClick={toggleAdminView}>
          {!adminView ? "Admin" : "Home"}
        </button>
      )}
    </div>
  );
}

export default NavBar;
