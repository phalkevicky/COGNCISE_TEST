import './App.css';
import { HashRouter,Routes,Route,Navigate } from "react-router-dom";
import Login from './components/login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Dashboard from './components/Dashboard/Dashboard';
import { Context } from './components/constant/Context';
import { useState } from 'react';
import Signup from './components/signup/Signup';

function App() {

  const [isloggedin, setisloggedin] = useState(false)


  return (
    <div className="App">

      <Context.Provider value={[isloggedin, setisloggedin]}>

        <HashRouter>
            <Routes>
             <Route path="/" element={<Navigate to="/login" />} />
             <Route path="*" element={<PageNotFound />} />
             <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </HashRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
