// function doubleIt(num){
//     return num * 2;
// }


// const result = doubleIt(5)


// console.log(result);


// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;


const result = doubleIt(5);
console.log(result);



const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const finalResult = doMath(7, 5);
console.log(finalResult);