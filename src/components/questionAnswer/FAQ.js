import React, { useState } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const FAQ = (props) => {
    const {question,answer}=props.data;
    console.log(props.data)
   const[show,setShow]=useState(false)
  return (
    <div className='faqConatiner'>
        <div className="faq">
<div className='plusIcon'>< ControlPointIcon onClick={()=>setShow(!show)}/></div>
<div className="answerOfQuestion">
    <h4 className="question">{question}</h4>
    {show &&
    <p className="answer">{answer}</p>}
</div>
</div>

    </div>
  )
}

export default FAQ