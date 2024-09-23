//1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
//2. 어떤 숫자를 넣으면 5배수이면 5의배수 아니면 5의배수가 아님을 함수
//3. 어떤 숫자를 넣으면 1 - 일반 팝콘, 2- 캬라멜 팝콘, 3- 치즈 팝콘, 그외 그런거 없음 돌려주는 함수
//4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex) 사탕,떡볶이,멜론 -> [사탕,떡볶이,멜론]

function oddEven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

function isFiveTime(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

//마술상자: input -> output
//

// output이 있음[string]
function popcorn(x) {
  const menu = {
    1: "일반 팝콘",
    2: "캬라멜 팝콘",
    3: "치즈 팝콘",
  };
  return menu[x] || "그런거 없음";
}

function popcorn2(x) {
  return `${x} 팝콘`;
}

const myPopcorn = popcorn(2);
console.log(myPopcorn);

// 팝콘문자만 원해요 + 출력까지해줄께요: 순수성 위배
function popcorn1(x) {
  if (x == 1) {
    console.log("일반 팝콘");
  } else if (x == 2) {
    console.log("캬라멜 팝콘");
  } else if (x == 3) {
    console.log("치즈 팝콘");
  } else {
    console.log("그런 팝콘 없음 ㅅㄱ");
  }
}

function stringToArray(a, b, c) {
  return [a, b, c];
}

//어떠한 과일이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수
function fruit(x) {
  return `${x}맛 아이스크림`;
}

const a = fruit("민트");
console.log(a);

function fruitArray(a, b, c) {
  return [a, b, c];
}

function oddEven1(x) {
  return x % 2 == 1;
}
