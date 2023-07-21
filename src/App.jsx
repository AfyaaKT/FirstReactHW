import Heading from "./Heading";
import './App.css';
import ece from './ece.jpg';


function App() {
  console.log("I'm Afyaa from main page , I'm the parent of this page")
  
  return (<div className ="main" ><h1 >I'm Afyaa from main page</h1>
  <img src={ece} alt="image of main page"  />
  <Heading/></div> );
  
   
  
}
export default App;

