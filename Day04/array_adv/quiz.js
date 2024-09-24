// // 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return x % 3 == 0;
// });

// // 2. [1,2,3,4,5,6,7,8,9,10] 4 이상 8이하만 살려줘
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return 4 <= x && x <= 8;
// });

// const fruitArray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];
// // 3. 알파벳 O가 들어있는 애들만 살려줘
// fruitArray.filter((x) => {
//   return x.includes("o");
// });

// // 4. 문자길이가 6글자 이상만 살려줘
// fruitArray.filter((x) => {
//   return x.length >= 6;
// });

// // 5. 문자길이가 짝수인 애들만 살리고, 대문자화 시켜줘
// // 메소드 체이닝(method chaining)
// fruitArray
//   .filter((x) => {
//     return x.length % 2 == 0;
//   })
//   .map((x) => {
//     return x.toUpperCase();
//   });

//유저에게 정수 n(maximum),k(배수)를 입력 받으면
// n = 10, k = 3 -> [3,6,9]
// n = 15, k = 5 -> [5,10,15]
// 를 도출하는 함수 만들어주세요!

// 10, 3
// const test = (n, k) => {
//   return Array(n)
//     .fill(0) // [0,0,0,0,0,0,0,0,0,0]
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     }); // [3,6,9]
// };

// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true];

// //함수화 [패턴화]
// const test1 = (todo, finish) => {
//   return todo.filter((x, i) => {
//     return !finish[i];
//   });
// };

// 막퀴
// x기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨거
// "xabcxdefxghi" [0, 3, 3, 3]
//const test2 = (word) => word.split("x").map((x) => x.length);

const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

// 모음: a,e,i,o,u는 대문자로 바꾸기
// [mElOn, kIwI, ApplE, bAnAnA, OrAngE]

// const vowels = ["a", "e", "i", "o", "u"];
// fruits.map((x) =>
//   x
//     .split("")
//     .map((y) => vowels.some((v)=> v == y) ? y.toUpperCase() : y)
// );

// 1~100 까지 만들고, 369 만들기
// [1,2,"👏","👏",..,29,"👏","👏"]

// 알고리즘 문제 풀때[String,Array,Number]
// 해당 타입에 방법이없으면 다른 타입으로 바꿔서 ㄱㄱ
// 3,6,9,13,16,19,23

const num = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );
