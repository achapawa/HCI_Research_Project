import {React,useState} from 'react'
import "../styles/ButtonQuiz.css"

function ButtonQuiz(props) {
    const [showQuiz, setShowQuiz] = useState(false)
    const handleClose = () =>{ setShowQuiz(false);
        <prompt>Please interact with buttons onec!</prompt>
    }
    const handleShow = () => setShowQuiz(true);
  return (
    <div>
        <p className='p-quiz'>{props.question}</p>
        <button className='button-45' onClick={handleShow}>Yes</button>
        <button className='button-45' onClick={handleClose}>No</button>
        
        {showQuiz && <div className='quiz'>
        <h6>{props.quizHead}</h6>
        <input type="text" className="button-quiz-text" name="title"/>
        <button className='button-45' onClick={handleClose}>Submit</button>
        </div>
        }
        
    </div>
  )
}

export default ButtonQuiz