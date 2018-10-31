//반복문
//10,000 미만의 숫자 중 3의 제곱수만 찾아서 출력하는 반복문을 작성하세요.(ex. 3,9,27)

let numbers = [];
for (let i = 3; i < 10000; i = i * 3) {
    numbers.push(i)
}
console.log(numbers)

let numbers2 = [];
let j = 3;
while (j < 10000) {
    numbers2.push(j)
    j *= 3
}
console.log(numbers2)