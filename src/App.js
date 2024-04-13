import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Weathe from './component/Weathe';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Weathe />} />
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
