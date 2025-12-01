import logo from './logo.svg';
import './App.css';
import User from './User';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Fun from './Fun';
function App() {
//   useEffect(()=>{
// it will run every time when page renders
//   })
  return (
    <div className="App">
      <BrowserRouter>

      <nav style={{display:"flex",gap:'42px'}}>

      <Link to='/' >Home</Link>
      <Link to='/students'>Students</Link>
      <Link to='/fun'>Fun</Link>
</nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
        <Route path='/fun' element={<Fun/>}></Route>
       
      </Routes>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
