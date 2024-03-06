import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import {AddAppointment} from "./Pages/AddAppointment"
import { Router ,RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/appointments'></Route>
        <Route path='/appointments/add' element={<AddAppointment/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
