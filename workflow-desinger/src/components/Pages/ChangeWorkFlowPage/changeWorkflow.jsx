import NavBar from "../../Nav/nav";
import DragAndDrop from "./ChangeWorkflow/dragAndDrop";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function ChangeWorkflow({adminView, setAdminView}) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>

        <NavBar
          setAdminView={setAdminView}
          adminView={adminView}
        />

        <DragAndDrop/>
        
      </div>
    </DndProvider>
  );
}

export default ChangeWorkflow;
