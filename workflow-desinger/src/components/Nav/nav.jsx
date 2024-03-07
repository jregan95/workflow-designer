import './Nav.css'
function NavBar({adminView, setAdminView}) {

  const toggleAdminView = () => {
    setAdminView(!adminView); 
  };

  return (
    <div className="top-nav">
      <h3 className="title">
       Workflow
       </h3>
       <button className="view-btn" onClick={toggleAdminView}>
        {!adminView ? "Admin" : "Home"}
       </button>
    </div>
  );
}

export default NavBar;
