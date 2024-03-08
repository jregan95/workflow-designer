import "./styles/WorkflowListItem.css"
import Arrow from "./Arrow";

function WorkflowListItem({action, index, length}) {
  
  return (
    <div className="worflow-chain">

      <div className="workflow-container">
        {action}
      </div>
      
      <div className="arrow">
        {index !== length -1 && <Arrow/>}
      </div>

    </div>
  );
}

export default WorkflowListItem;
