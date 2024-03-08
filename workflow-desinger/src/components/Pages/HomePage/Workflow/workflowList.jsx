import actions from "../../../../data/actions";
import workflow from "../../../../data/workflow";
import WorkflowListItem from "./workflowListItem";
import "./WorkflowList.css"

function WorkflowList() {

  const savedWorkflow = JSON.parse(localStorage.getItem('workflow')) || workflow;
 
  return (
    <div className="workflow">
      
      {savedWorkflow.stages.map((stage, index) => {
       return (
        <WorkflowListItem 
          key={index} 
          action={stage.action} 
          index={index}
          length={savedWorkflow.stages.length}
        />)
      })}

    </div>
  );
}

export default WorkflowList;
