import { useState } from 'react';
import { useDrop } from 'react-dnd';
import workflow from '../data/workflow';
import actions from '../data/actions';


const useDragAndDrop = () => {

  const [canvas, setCanvas] = useState([])


  const [{isOver}, drop] = useDrop(() => ({
    accept: "action",
    drop: (item) => addActionToCanvas(item.action),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))


  const addActionToCanvas = (action) => {
    const actionList = actions.actions.filter((act) => act === action)
    setCanvas((prevCanvas) => [...prevCanvas, actionList]);
  };


  const handleSave = () => {

    if(canvas.length === 0) {
      return alert("Must add minimum of 1 action")
    }
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

  return { canvas, drop, isOver, handleSave, handleCancel };
}

export default useDragAndDrop