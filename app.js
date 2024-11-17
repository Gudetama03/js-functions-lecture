
// 2 parts working with functions

// pt1 function def

// pt2 calling function

/* 

    function nameOfFunction(parameter1,parameter2){

    insert code here

    }
*/


function addTwoNum(num1,num2){
    return num1+num2
    
}

addTwoNum(50,12)

// return lets you retrieve the value you got in the function
// return only end of code
// once you return any code below it wont work


function planetHasWater(planet){

    planet = planet.toLowerCase()
    if(planet==="earth" || planet==="mars"){
        console.log("true")
    }

    else if(planet==="venus" || planet==="jupiter"){
        console.log("false")
    }

    else{
        console.log("Check input")
    }

    
}

let result=addTwoNum(2,8)
console.log(result)


function computeArea(height,width){
    area = height*width
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}

console.log(computeArea(50,25))