import './App.css';
import MessageBox from './MessageBox';
import Ragister from './Ragister';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import { useStateValue } from './StateProvider';
function App() {
  const [{authUser},dispatch]=useStateValue()
  return (
    <Router>
      <div className="App">
        <Routes>
            {authUser?      
            (<Route path='/' element={<MessageBox/>}/>):
            (<Route path='/' element={<Ragister/>}/>)
            }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
