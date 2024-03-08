import NavBar from "../../Nav/nav";
import DragAndDrop from "./DragAndDrop";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function ChangeWorkflow({toggleAdminView, adminView, setAdminViewFalse}) {
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div>

        <NavBar
          adminView={adminView}
          toggleAdminView={toggleAdminView}
          setAdminViewFalse={setAdminViewFalse} 
        />

        <DragAndDrop/>
        
      </div>
    </DndProvider>
  );
}


export default ChangeWorkflow;
