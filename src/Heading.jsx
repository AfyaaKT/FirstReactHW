import './App.css';
import Dna from './Dna.png'
function Heading(){
    console.log("I'm Afyaa from component calling.I'm the child of this page")
    return (<div className="component">
        <h1 >I'm Afyaa from component calling</h1>
    <img src={Dna} alt="image of component" />
    </div>
    )
}
export default Heading;