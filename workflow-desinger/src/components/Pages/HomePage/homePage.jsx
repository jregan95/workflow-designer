import WorkflowList from "./Workflow/workflowList"
import NavBar from '../../Nav/nav'
import Admin from './Admin/adminItem';



function HomePage({adminView, setAdminView}) {


  return (
    <div >

      <NavBar 
        setAdminView={setAdminView}
        adminView={adminView}
      />

      {!adminView && <WorkflowList/>}
      {adminView && <Admin/>}

    </div>
  );
}

export default HomePage;
