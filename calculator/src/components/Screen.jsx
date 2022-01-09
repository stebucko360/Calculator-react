import React from 'react'

export const Screen = ({numberArray}) => {
    console.log(numberArray);
    return (
        <div>
            {<p>{typeof numberArray === 'string' ? numberArray : numberArray.join(' ')}</p>}
        </div>
    )
}
