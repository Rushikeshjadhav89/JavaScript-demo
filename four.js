// const bill=275;
// const bill=40;
const bill=430;
const tip= bill>=50 && bill<=300 ? (bill/100)*15 :(bill/100)*20;
const total=bill+tip
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${total}.`)