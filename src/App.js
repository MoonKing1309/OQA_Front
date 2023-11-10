import './App.css';

import Navbar from './components/navbar';
import Play from './components/play'
import Contact from './components/contact'
import Quiz from './components/quiz'
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Footer from './components/footer';
import Myaccount from './components/myaccount';
import Adminquiz from './components/adminquiz';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import {useState} from 'react'

function App() {

  const [loginVal,setLoginVal] = useState(1);
  // const [quizData, setQuizData] = useState();quizState={[quizData,setQuizData]}
  //change from 0 to localstoage value to not logout after each refresh;
  return (
   <div>
      <Router>
        <Navbar loginState={[loginVal,setLoginVal]}/>
        <Routes>
          <Route path='/' element={<Home loginState={[loginVal,setLoginVal]}/>}></Route>
          <Route path='/home' element={<Home loginState={[loginVal,setLoginVal]}/>}></Route>
          <Route path='/play' element={<Play loginState={[loginVal,setLoginVal]}/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/play/Quiz/:id' element={<Quiz loginState={[loginVal,setLoginVal]} />}></Route>
          <Route path='/login' element={<Login loginState={[loginVal,setLoginVal]}/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/myaccount' element={<Myaccount/>}></Route>
          <Route path='play/adminQuiz' element={<Adminquiz loginState={[loginVal,setLoginVal]}/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      
      
   </div>
  );
}

export default App;
