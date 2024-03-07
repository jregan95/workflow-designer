import actions from "../../../../data/actions";
import WorkflowListItem from "./workflowListItem";
import "./WorkflowList.css"

function WorkflowList() {
 
  return (
    <div className="workflow">
      
      {actions.actions.map((action, index) => {
       return (
        <WorkflowListItem 
          key={index} 
          action={action} 
          index={index}
          length={actions.actions.length}
        />
       )
      })}

    </div>
  );
}

export default WorkflowList;
