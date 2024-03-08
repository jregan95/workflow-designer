import WorkflowListItem from "./WorkflowListItem";
import "./styles/WorkflowList.css"
import workflow from "../../../data/workflow";


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
