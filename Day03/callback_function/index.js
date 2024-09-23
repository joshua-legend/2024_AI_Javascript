// 함수: 마술상자
// f(x) = x + 1;
// 마라,크림 -> 마라떡볶이/크림떡볶이

// f(g(x)): 마술상자 안에 마술상자 넣음 ㅅㄱ
// 요리법(마라탕) -> 음식
// callback: 함수 안에 함수 넣기
const cook = (recipe) => {
  console.log("요리 시작");
  recipe();
  console.log("요리 끝");
};

const taco = () => {
  console.log("살사소스 준비");
  console.log("나초칩");
  console.log("난 준비");
  console.log("고기 올리기");
  console.log("타코 완성");
};

const ramen = () => {
  console.log("물 끓이기");
  console.log("면 넣기");
  console.log("스프 넣기");
  console.log("계란 넣기");
};

cook(ramen);

const skill = (magic) => {
  console.log("스킬 사용");
  magic();
  console.log("스킬 완료");
};

const fire = () => {
  console.log("불 마법 사용");
};

const ice = () => {
  console.log("얼음 마법 사용");
};

const tree = () => {
  console.log("나무로 변하셈");
};
skill(ice);
skill(fire);
