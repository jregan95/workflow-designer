
import ChangeWorkflow from "./components/Pages/ChangeWorkFlowPage/ChangeWorkflowPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import useAdminView from "./hooks/useAdminView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const {
    state,
    toggleAdminView,
    setAdminViewFalse
  } = useAdminView();

  

  return (

      <Router>
        <Routes>
        
          <Route 
            path="/"
            element={
              <HomePage 
                adminView={state.adminView}
                toggleAdminView={toggleAdminView}
                workflow={state.workflow}
              />}
          />

          <Route 
            path="/workflow"
            element={
              <ChangeWorkflow
                adminView={state.adminView}
                toggleAdminView={toggleAdminView} 
                setAdminViewFalse={setAdminViewFalse} 
              />}
          />

        </Routes>
      </Router>

  );
}

export default App;
