// 1-е задание
// массив с числами
let numbers = [3, 5, 7, 1, 2]
// переменная для хранения суммы - sum
let sum = 0
// суммируем с помощью цикла
for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
}
// вывод
console.log("Сумма элементов массива:", sum);

// 2-е задание
// переменная для мин. значения
let min = numbers[0]; // допустим, минимальный элемент первый

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log("Минимальный элемент массива:", min);

// 3-е задание
// запрос у пользователя числа
const prompt = require('prompt-sync')();
let N = parseInt(prompt("Введите число: "));
// ищем элементы, которые больше этого числа
let filteredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > N) {
        filteredNumbers.push(numbers[i]);
    }
}

console.log("Элементы больше N:", filteredNumbers);


