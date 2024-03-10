import { useDrag } from "react-dnd"
import './styles/ActionList.css'

function Action({action}) {
  
  //React DnD library, checks if item is being dragged
  const [{isDragging}, drag] = useDrag(() => ({
    type: "action",
    item: {action: action},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <div ref={drag} className="action"> {action}</div>
  )
}

export default Action