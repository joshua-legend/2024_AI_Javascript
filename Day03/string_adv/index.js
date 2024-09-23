//string_adv
const pizza = "cheese pizza";

//포함하니?
const hasCheese = pizza.includes("cheese"); // true
const hasPine = pizza.includes("pineapple"); // false
const hasC = pizza.includes("c"); // true
const hasEE = pizza.includes("ee"); // true

//몇번째임?
const indexH = pizza.indexOf("h"); // 1
const indexB = pizza.indexOf("b"); // -1

//바꾸기
pizza.replace("z", "k"); //cheese pikza
pizza.replaceAll("z", "k"); //cheese pikka

pizza.startsWith("pizza"); // false
pizza.endsWith("pizza"); // true

pizza.toUpperCase(); // 대문자화
pizza.toLowerCase(); // 소문자화

// 나누기
pizza.slice(0, 4); // chee

// 나누기[배열화] 😍
pizza.split("i"); //["chesse p", "zza"]
pizza.split(" "); //["cheese", "pizza"]

// 반복하기
pizza.repeat(3); // cheese pizza cheese pizza cheese pizza

pizza.length; // 문자의 길이
