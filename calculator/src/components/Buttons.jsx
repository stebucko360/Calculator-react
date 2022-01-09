import React from 'react'
import { calculate } from './utils/utils.js'

export const Buttons = ({ setNumberArray }) => {

    const numberButtonsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const functionsArray = ['+', '-', '/', '*', '=', 'C'];

    const handleClick = (string, type) => {
        setNumberArray((currentArray)=>{
            if (type === 'func') {
                if (string === 'C') {
                    let newArray = [...currentArray]
                    newArray = ['0']
                    return newArray
                } 
                else if (string === '=') {
                    let newArray = [...currentArray]
                    return calculate(newArray)
                } else {
                   const newArray = [...currentArray, string, '0']
                    return newArray 
                }
                
            } 
            else if (type === 'number') {
                const newArray = [...currentArray];
                newArray[(newArray.length -1)] += string
                return newArray;
            }
            
        })
    }
    return (
        <div>
            <div className='numberButtons'>
               {numberButtonsArray.map(number=>{
                   return <button onClick={()=>{handleClick(number, 'number')}}>{number}</button>
            })}
            </div>
            <div className='functionButtons'>
               {functionsArray.map(func=>{
                   return <button onClick={()=>{handleClick(func, 'func')}}>{func}</button>
            })}
            </div>
            
        </div>
    )
}
