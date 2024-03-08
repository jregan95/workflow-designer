import actions from "../../../data/actions"
import ActionsList from "./ActionsList"
import useDragAndDrop from "../../../hooks/useDragAndDrop"
import './styles/DragAndDrop.css'

function DragAndDrop() {

  const {
    canvas,
    drop,
    isOver,
    handleSave,
    handleCancel
    } = useDragAndDrop();

  
  return (
    <>
      <div className="actions"> 
        {actions.actions.map((action,index) => {
          return <ActionsList action={action} id={index} key={index}/>
        })}
     </div>

      <div className="canvas" ref={drop}> 
        {canvas.map((action, index) =>  {
          return <ActionsList action={action} id={index} key={index}/>})}
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