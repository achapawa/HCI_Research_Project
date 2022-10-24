
import Button1 from "./Button1";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../styles/Button1.css";
import "../styles/Button2.css";
import "../styles/Button3.css";
import "../styles/Button4.css";
import "../styles/Button5.css";

function Buttons() {
    const text1 ="Filled buttons display a container around a text label. Usually these types of buttons is filled with a solid dark colors";
    const text2="An elevated button is a label child displayed on a Material widget whose Material.elevation increases when the button is pressed."
    const text3="A filled tonal button is an alternative middle ground between filled and outlined buttons.";
    const text4="Outlined buttons is essentially a TextButton with an outlined border. Outlined buttons are medium-emphasis buttons. They contain actions that are important, but they aren’t the primary action in an app."
    const text5="Text button is a clickable text, placed outside the main text container. From the text the users learn what happens after the button is pressed."
  return (
    
    <div>
        <Button1 className="buttons" name="1.Filled" buttonStyle="button-9" title="Filled Button" body={text1} />
        <Button1 className="buttons" name ="2.Elevated"   buttonStyle="btn btn-secondary" title="Elevated" body={text2} />
        <Button1 className="buttons" name="3.Filled Tonal" buttonStyle="but-tonal" title="Filled Tonal" body={text3} />
        <Button1 className="buttons" name="4.Outlined" buttonStyle="button-23" title="Outlined Button" body={text4} />
        <Button1 className="buttons" name="5.Text" buttonStyle="btn-57" title="Text Button" body={text5} />
      </div>
  )
}

export default Buttons