import React,{useState} from 'react'
import './Calculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const Calculator = () => {
    const[input,setInput]=useState('');
    const[output,setOutput]=useState('');

    const handleButtonClick=(value)=>{
        switch(value){
            case 'C':
                setInput('');
                setOutput('');
                break;
            case 'D':
                setInput(input.slice(0,-1));
                break;
            case '=':
                try{
                    setOutput(input);
                    setInput(eval(input).toString());
                }
                catch{
                    setInput("Error");
                }
                break;
            default:
                setInput(input+value);
                break;
        }
    };

    const buttons = [
        'C', '%', 'D', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0','00', '.', '='
    ];

  return (
    <div className='main glass'>   
        <div className='icon'>
            <FontAwesomeIcon icon={faFire} className='fire'/>
        </div>
        <div className='content'>
            <div className='content1'>{input}</div>
            <div className='content2'>{output}</div>
        </div>
        <div className='buttons'>
            {buttons.map((button)=>(
                <button key={button} className={`btn glass ${button==='C' || button==='D' || button === '=' || button === '%' || button === '/' || button === '*' || button === '-' || button === '+' ? 'bglass' : ''}`} onClick={() => handleButtonClick(button)}>
                    {button}
                </button>
            ))}
        </div>
    </div>
  );
};

export default Calculator
