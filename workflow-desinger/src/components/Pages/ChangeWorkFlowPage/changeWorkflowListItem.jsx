import NavBar from "../../Nav/nav";

function ChangeWorkflowListItem({adminView, setAdminView}) {
  return (
    <div>

      <NavBar
        setAdminView={setAdminView}
        adminView={adminView}
      />

       Change Workflow List Item
       
    </div>
  );
}

export default ChangeWorkflowListItem;
