/* ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела (BMI).

2. - Индекс массы тела рассчитывается по формуле: 
вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. Сравнить массы тел двух людей (данные ниже), и вывести в консоль сравнения двух результатов в булевом значении (true / false).

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

4. У кого индекс BMI больше?

*/

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