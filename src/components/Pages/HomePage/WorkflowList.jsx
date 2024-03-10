import WorkflowListItem from "./WorkflowListItem"
import "./styles/WorkflowList.css"
import workflow from "../../../data/workflow"


function WorkflowList() {

  //Gets workflow saved in memory. If none it get original workflow
  const savedWorkflow = JSON.parse(localStorage.getItem('workflow')) || workflow;
 
  return (
    <div>

      <h2 className="current-workflow-title">Current Workflow</h2>

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

    </div>
  );
  
}

export default WorkflowList;
