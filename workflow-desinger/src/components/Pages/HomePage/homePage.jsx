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

      {!adminView && <WorkflowList workflow={workflow}/>}
      {adminView && <Admin/>}

    </div>
  );
}


export default HomePage;
