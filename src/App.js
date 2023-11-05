import './App.css';
import Navbar from './components/navbar';
import Play from './components/play'
import Contact from './components/contact'
import Quiz from './components/quiz'
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
function App() {
  return (
   <div>
      <Navbar loginState={0}/>
      <Home/>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Play loginState={1}/> */}
      {/* <Contact/> */}
      {/* <Quiz loginState={1} quizId={1}/> */}
   </div>
  );
}

export default App;
