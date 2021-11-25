
// Spread Operator

const ages = [12, 13, 14, 15, 16, 17, 18];
const ages2 = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]


const allAges = [...ages, ...ages2]
console.log(allAges);


// Find maximum number
const allAgess = [650, 450, 250];
const maximum = Math.max(...allAgess)
console.log(maximum);