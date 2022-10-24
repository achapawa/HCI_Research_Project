
import Button1 from "./Button1";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../styles/Button1.css";
import "../styles/Button2.css";
import "../styles/Button3.css";
import "../styles/Button4.css";
import "../styles/Button5.css";

function Buttons() {
    const text1 ="Filled buttons display a container around a text label. Usually these types of buttons is filled with a solid dark colors"
  return (
    
    <div>
        <Button1 className="buttons" name="1.Filled" buttonStyle="button-9" title="Filled Button" body={text1} />
        <Button1 className="buttons" name ="2.Elevated"   buttonStyle="btn btn-secondary" title="Elevated" />
        <Button1 className="buttons" name="3.Filled Tonal" buttonStyle="but-tonal" title="Filled Tonal" />
        <Button1 className="buttons" name="4.Outlined" buttonStyle="button-23" title="Outlined Button" />
        <Button1 className="buttons" name="5.Text" buttonStyle="btn-57" title="Text Button" />
      </div>
  )
}

export default Buttons