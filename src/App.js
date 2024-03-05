import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';

function App() {
  return (
    <div className="container mt-4" style={{
      backgroundColor:"#F0F8FF",
      padding:"10px 40px",
      height:"700px",
      borderRadius:"20px"
    }}>
      <div className='row'>
        <Header/>
        <hr/>
      </div>
      <div className='row'>
        <Main/>
        
      </div>
    </div>
  );
}

export default App;
