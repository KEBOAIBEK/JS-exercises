let winnerResult = (res1, res2, res3) => (res1 + res2 +res3) / 3;

const arrCrazycats = [];
const arrFunnyDucks = [];

let crazyCats1 = winnerResult(44, 23, 71);
let crazyCats2 = winnerResult(85, 54, 41);
let funnyDucks1 = winnerResult(65, 54, 49);
let funnyDucks2 = winnerResult(23, 34, 27);

arrCrazycats.push(crazyCats1, crazyCats2);
arrFunnyDucks.push(funnyDucks2, funnyDucks2);


let newFunc = (crazyCats1, funnyDucks1) => {
    if (crazyCats1 > funnyDucks1) {
        return "winner CrazyCats"
        } else {
        return 'Winner FunnyDucks'
    }
}

console.log(arrCrazycats);
console.log(arrFunnyDucks);
console.log(newFunc(arrCrazycats, arrFunnyDucks));