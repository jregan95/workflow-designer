import actions from "../../../../data/actions"
import workflow from "../../../../data/workflow"
import Action from "./actions"
import '../ChangeWorkflow/DragAndDrop.css'
import { useState } from "react"
import { useDrop } from "react-dnd"

function DragAndDrop() {

  const [canvas, setCanvas] = useState([])

  //Checking reference of drggable item and if it is over canvas / adding to canvas array
  const [{isOver}, drop] = useDrop(() => ({
    accept: "action",
    drop: (item) => addActionToCanvas(item.action),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const addActionToCanvas = (action) => {
    const actionList = actions.actions.filter((act) => act === action)
    setCanvas((prevCanvas) => [...prevCanvas, actionList[0]])
  }


  const handleSave = () => {

    const newWorkflow = { ...workflow };

    let newStageOrderArray = []
    
    canvas.map((item, index) => {
      let newStage = {};
     
      //Index starts at 0, so declaring a variable to use an index count starting at 1
      let accurateIndex = index + 1;

      newStage.id = accurateIndex;
      newStage.action = item;
      newStage.isStart = (index === 0);
      newStage.prevStage = index === 0 ? null : index;
      newStage.nextStage = accurateIndex === canvas.length ? null : accurateIndex + 1;
   
      newStageOrderArray.push(newStage);
      
    })
    
    newWorkflow.stages = newStageOrderArray;
    localStorage.setItem('workflow', JSON.stringify(newWorkflow));
    setCanvas([]);
  }

  
  const handleCancel = () => {
    setCanvas([]);
  }

  return (
    <>
      <div className="actions"> 
        {actions.actions.map((action,index) => {
          return <Action action={action} id={index}/>
        })}
     </div>

      <div className="canvas" ref={drop}> 
        {canvas.map((action, index) =>  {
          return <Action action={action} id={index}/>})}
      </div>

      <div>
        <button onClick={handleSave}>
          Save
        </button>

        <button onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default DragAndDrop