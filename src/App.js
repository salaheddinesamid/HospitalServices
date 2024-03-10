import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';
import { Main } from './Pages/Main';
import {AddAppointment} from "./Pages/AddAppointment"
import { Router ,RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/appointments'></Route>
        <Route path='/appointments/add' element={<AddAppointment/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
