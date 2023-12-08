import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [expression,setExpression] = useState('')

  function handleAc(){
    setExpression('')
  }

  function heandleInput(e){
    setExpression(expression+ e.target.textContent)

  }

  function handleCalculate(){
    setExpression(eval(expression))
  }

  function handleDelete(){
    if(typeof expression != "string"){
      let exp1 = expression.toString()
      setExpression(exp1.slice(0, -1))
    }
    else{
    setExpression(expression.slice(0,-1))
    }

  }


  return (
    <>
      <div id='calculatorBodyContainer'>
        <div><input type="text" id='inputBox' value={expression} placeholder='enter a value'/></div>
        <div id='firstLine'>
          <div id='AC' onClick={handleAc}><span>AC</span></div>
          <div id='DEL'onClick={handleDelete}><span>DEL</span></div>
          <div id='multiply' onClick={heandleInput}><span>*</span></div>
        </div>
        <div className='row234'>
          <span className='button' onClick={heandleInput}>1</span>
          <span className='button' onClick={heandleInput}>2</span>
          <span className='button' onClick={heandleInput}>3</span>
          <span className='button' onClick={heandleInput}>/</span>
        </div>
        <div className='row234' >
          <div className='button' onClick={heandleInput}>4</div>
          <div className='button' onClick={heandleInput}>5</div>
          <div className='button' onClick={heandleInput}>6</div>
          <div className='button' onClick={heandleInput}>+</div>
        </div>
        <div className='row234'>
          <div className='button' onClick={heandleInput}>7</div>
          <div className='button' onClick={heandleInput}>8</div>
          <div className='button' onClick={heandleInput}>9</div>
          <div className='button' onClick={heandleInput}>-</div>
        </div>
        <div className='row'>
          <div className='button' onClick={heandleInput}>.</div>
          <div className='button' onClick={heandleInput}>0</div>
          <div className='button' onClick={handleCalculate}>=</div>
        </div>
        
      </div>
    </>
  )
}

export default App
