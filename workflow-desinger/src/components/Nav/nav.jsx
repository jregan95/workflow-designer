import './Nav.css'
import { useLocation} from 'react-router-dom';
 import { Link } from 'react-router-dom';


function NavBar({toggleAdminView, adminView, setAdminViewFalse}) {

  const location = useLocation();

  const handleClick = () => {
    toggleAdminView();
  }


  return (
    <div className="top-nav">
      <h3 className="title">
       Workflow
       </h3>
       {location.pathname !== "/" ? (
        <Link to="/">
        <button className="view-btn" onClick={() => setAdminViewFalse()}>
          Home
        </button>
        </Link>
      ) : (
        <button className="view-btn" onClick={handleClick}>
          {!adminView ? "Admin" : "Home"}
        </button>
      )}
    </div>
  );
}


export default NavBar;
