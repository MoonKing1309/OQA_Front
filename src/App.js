import './App.css';
import Navbar from './components/navbar';
import Play from './components/play'
import Contact from './components/contact'
import Quiz from './components/quiz'
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
  return (
   <div>
      <Navbar loginState={0}/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/play' element={<Play/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </Router>
      
      
   </div>
  );
}

export default App;
