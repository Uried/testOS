import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormGenerator from './components/Formgenerator';
import DynamicForm from './components/formulaire';

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path='/' element={<FormGenerator />} />  
          <Route path='/dynamicform' element={<DynamicForm />} />  

           </Routes>

      </Router>
    
    </div>  
  )
}

export default App;
