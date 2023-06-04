let kgPetr = 72,
    heightPetr = 1.88,
    kgDenis = 82,
    heightDenis = 1.73;

const bmiPetr = kgPetr / heightPetr ** 2,
    bmiDenis = kgDenis / (heightDenis * heightDenis),
    compareAll = bmiPetr < bmiDenis;

console.log(bmiPetr);
console.log(bmiDenis);
console.log(compareAll);    