// contoh build in function yang menggunakan callback
const number1 = [1, 2, 3, 4, 5]

const number2 = number1.map((num) => {
    return num * 2
})

console.log(number2);