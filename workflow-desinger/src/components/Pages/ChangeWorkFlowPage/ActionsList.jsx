import { useDrag } from "react-dnd";


function Action({action}) {
  
  const [{isDragging}, drag] = useDrag(() => ({
    type: "action",
    item: {action: action},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <div ref={drag} style={{border: isDragging ? "5px solid pink" : "0px"}}> {action}</div>
  )
}

export default Action