import WorkflowList from './WorkflowList';
import NavBar from '../../Nav/nav'
import Admin from "./AdminView";



function HomePage({toggleAdminView, adminView, workflow}) {


  return (
    <div >

      <NavBar 
        adminView={adminView}
        toggleAdminView={toggleAdminView}
      />
      
      <div className="list-containter">
        {!adminView && <WorkflowList workflow={workflow}/>}
      </div>

      <div>
        {adminView && <Admin/>}
      </div>

    </div>
  );
}


export default HomePage;
