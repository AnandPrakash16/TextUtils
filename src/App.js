import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alerts from './components/Alerts'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type,message ) =>{
    setAlert({
      type : type,
      msg: message
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {

    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("info","Dark mode is enabled");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("info","Dark mode is disabled");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm heading="Enter text to analyze." mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
