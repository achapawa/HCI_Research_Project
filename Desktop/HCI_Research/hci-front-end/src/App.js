
import ButtonQuiz from "./components/ButtonQuiz";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";

import Topsection from "./components/Topsection";
import "./styles/App.css";


function App() {  
  return (
    <div className="main">
      <Topsection/>
      <h4 className="but-heading">Buttons</h4>
      <p>Please click each button to interact with the buttons.</p>
      <Buttons />
      <ButtonQuiz />
      <Checkbox label="Do you know a checkbox?" />
      <h4>Select Choices</h4>
      <Card />
      
      
      
    </div>
  );
}

export default App;
