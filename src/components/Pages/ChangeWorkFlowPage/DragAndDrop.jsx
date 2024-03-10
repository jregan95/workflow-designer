import actions from "../../../data/actions"
import ActionsList from "./ActionsList"
import useDragAndDrop from "../../../hooks/useDragAndDrop"
import './styles/DragAndDrop.css'

function DragAndDrop() {

  const {
    canvas,
    drop,
    handleSave,
    handleCancel,
    isActionInCanvas
    } = useDragAndDrop();

  
  return (
    <div className="drag-drop">
    
      <h2 className="change-title">Change Workflow</h2>
      
      <div className="actions"> 
        {actions.actions.map((action,index) => {
           if (!isActionInCanvas(action)) {
          return <ActionsList action={action} id={index} key={index}/>
           }
        })}
     </div>

      <div className="canvas" ref={drop}>
        {canvas.map((action, index) =>  {
          return <ActionsList action={action} id={index} key={index}/>
          })}
      </div>

      <div>
        <button className="btn-save" onClick={handleSave}>
          Save
        </button>

        <button className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>

    </div>
  );
  
}

export default DragAndDrop;