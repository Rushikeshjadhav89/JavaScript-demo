// let weightmark=78;          // weight in kg
// let weightjohn=92;
// let heightmark=1.69         // height in M
// let heightjohn=1.95

let weightmark=95;          // weight in kg
let weightjohn=85;
let heightmark=1.88;         // height in M
let heightjohn=1.76;

const BMI1=weightmark/heightmark**2;
const BMI2=weightjohn/(heightjohn*heightjohn);
console.log(BMI1," ",BMI2);
let answer= BMI1>BMI2;
console.log(answer);

