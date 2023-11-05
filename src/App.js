import './App.css';
import Navbar from './components/navbar';
import Play from './components/play'
import Contact from './components/contact'
import Quiz from './components/quiz'
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import { Router } from 'express';
function App() {
  return (
   <div>
      
      <Router>
        <Route path='/' component={Home}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/play' component={Play}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/quiz' component={Quiz}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
      </Router>
      <Navbar loginState={0}/>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Play loginState={1}/> */}
      {/* <Contact/> */}
      {/* <Quiz loginState={1} quizId={1}/> */}
   </div>
  );
}

export default App;
