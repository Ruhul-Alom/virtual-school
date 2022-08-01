import React from 'react'
import FAQ from './FAQ'
import './accrodin.css'
import DummyFAQ from './DummyFAQ'

const Accrodin = () => {
  return (
    <div className='accrodinContainer'>
      <h1 className="FAQTitle">Frequently Asked Question </h1>
      <div  className='faqConatiner'>
     {DummyFAQ.map(data=><FAQ key={data.id} data={data}/>) }
    </div>
    </div>
  )
}

export default Accrodin