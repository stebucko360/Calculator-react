export const calculate = (array) => {
    
    while (array.length > 1) {
        let firstThree = array.splice(0, 3)
        if (firstThree[1] === '+') {
            array.unshift(Number(firstThree[0]) + Number(firstThree[2]))
        }
        else if (firstThree[1] === '-') {
            array.unshift(Number(firstThree[0]) - Number(firstThree[2]))
        }
         else if(firstThree[1] === '*') {
            array.unshift(Number(firstThree[0]) * Number(firstThree[2]))
        }
         else if(firstThree[1] === '/') {
            array.unshift(Number(firstThree[0]) / Number(firstThree[2]))
        }
    }
    return array
};
    
