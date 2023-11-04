import './App.css';
import Navbar from './components/navbar';
import Play from './components/play'
import Contact from './components/contact'
import Quiz from './components/quiz'
function App() {
  return (
   <div>
      <Navbar loginState={0}/>
      {/* <Play loginState={1}/> */}
      {/* <Contact/> */}
      <Quiz loginState={1} quizId={1}/>
   </div>
  );
}

export default App;
