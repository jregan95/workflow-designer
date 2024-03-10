import { useState } from 'react'
import { useDrop } from 'react-dnd'
import workflow from '../data/workflow'


const useDragAndDrop = () => {

  const [canvas, setCanvas] = useState([]);

  const addActionToCanvas = (action) => {
    setCanvas((prevCanvas) => [...prevCanvas, action]);
  };


  //Uses React Dnd library to drop item and add to canvas
  const [{isOver}, drop] = useDrop(() => ({
    accept: "action",
    drop: (item) => addActionToCanvas(item.action),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));


  const handleSave = () => {

    if(canvas.length === 0) {
      return alert("Must add minimum of 1 action");
    }

    const copyOfWorkflow = { ...workflow };
    let newWorkflowArray = [];
    
    canvas.map((action, index) => {
      let newStage = {};
     
      //Index starts at 0, so declaring a variable to use an index count starting at 1
      let accurateIndex = index + 1;

      newStage.id = accurateIndex;
      newStage.action = action;
      newStage.isStart = (index === 0);
      newStage.prevStage = index === 0 ? null : index;
      newStage.nextStage = accurateIndex === canvas.length ? null : accurateIndex + 1;
   
      return newWorkflowArray.push(newStage);
      
    })
    
    copyOfWorkflow.stages = newWorkflowArray;
    localStorage.setItem('workflow', JSON.stringify(copyOfWorkflow));
    setCanvas([]);
  };

  
  const handleCancel = () => {
    setCanvas([]);
  };

  const isActionInCanvas = (action) => canvas.includes(action);


  return { 
    canvas, 
    drop, 
    isOver, 
    handleSave, 
    handleCancel, 
    isActionInCanvas 
  };
}

export default useDragAndDrop;