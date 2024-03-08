
import ChangeWorkflow from "./components/Pages/ChangeWorkFlowPage/changeWorkflow";
import HomePage from "./components/Pages/HomePage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {

  const [adminView, setAdminView] = useState(false)

  return (

      <Router>
        <Routes>
        
          <Route 
            path="/"
            element={
              <HomePage 
                setAdminView={setAdminView}
                adminView={adminView} 
              />}
          />

          <Route 
            path="/workflow"
            element={
              <ChangeWorkflow
                setAdminView={setAdminView}
                adminView={adminView} 
              />}
          />

        </Routes>
      </Router>

  );
}

export default App;
