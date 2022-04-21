import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Form from './form';
import Contest from './contest';
function App() {
 
  return (
    <Router>
      <div className='App'>
<Contest/>
            <Form />
      </div>
    </Router>
  );
}

export default App;
