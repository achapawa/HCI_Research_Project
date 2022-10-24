
import ButtonQuiz from "./components/ButtonQuiz";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";
import Slider from "./components/Slider";

import Topsection from "./components/Topsection";
import "./styles/App.css";


function App() {  
  const head1="Let us know which button you preferred the most among the above buttons (Please include the number in the textbox).";
  const q1="Did you learn about buttons?";
  const head2="Let us know which checkbox you preferred the most."
  const q2="Did you interact with the checkboxes?"
  const q3="Did you interact with the sliders?"
  const head3="Let us know which slider you prefer the most!"
  const head4="Let us know which select-options you preferred the most!"
  const q4 ="Did you interact with the select-options?"
  return (
    <div className="main">
      <Topsection/>
      <h4 className="but-heading">Buttons</h4>
      <p>Please click each button to interact with the buttons.</p>
      <Buttons />
      <ButtonQuiz quizHead={head1} question={q1} />
      <Checkbox label="Do you know a checkbox?" />
      <ButtonQuiz quizHead={head2} question={q2} />
      <Slider />
      <ButtonQuiz quizHead={head3} question={q3} />
      <h4>Select Choices</h4>
      <Card />
      <ButtonQuiz quizHead={head4} question={q4} />
      
      
      
    </div>
  );
}

export default App;
