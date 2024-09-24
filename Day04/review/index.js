// 1. [10,20,30,40,50]을 30이하 이면 100더하기, 아니면 200더하기
// 2. ["americano","latte","vanilla","mocha","mint","tea"]
//   -1. 5글자이하이면 대문자화, 아니면 '☕'로 바꾸기

const num = [10, 20, 30, 40, 50];
num.map((x) => (x <= 30 ? x + 100 : x + 200));

const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];
coffee.map((x) => (x.length <= 5 ? x.toUpperCase() : "☕"));

const a = [
  { name: "abc", age: 20 },
  { name: "bbc", age: 22 },
];

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
