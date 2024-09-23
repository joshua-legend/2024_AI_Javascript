// makeCoffee함수 만들기 [커피 준비 - 커피 완료]
// americano,latte,vanilla 함수 만들어서
// makeCoffee(americano) //[커피 준비 - 아메리카노 - 커피 완료]
// makeCoffee(latte) //[커피 준비 - 아메리카노 - 커피 완료]
// makeCoffee(vanilla) //[커피 준비 - 아메리카노 - 커피 완료]
const americano = () => {
  console.log("원두 갈기");
  console.log("샷 내리기");
  console.log("얼음을 컵에 넣기");
  console.log("샷 넣기");
  console.log("물 넣기");
};

const latte = () => {
  console.log("원두 갈기");
  console.log("샷 내리기");
  console.log("얼음을 컵에 넣기");
  console.log("샷 넣기");
  console.log("우유 넣기");
};

const vanilla = () => {
  console.log("원두 갈기");
  console.log("샷 내리기");
  console.log("얼음을 컵에 넣기");
  console.log("샷 넣기");
  console.log("물 넣기");
  console.log("바닐라 시럽 넣기");
};

const makeCoffee = (brew) => {
  console.log("커피 제작하기");
  brew();
  console.log("커피 완료");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);
makeCoffee(() => {
  console.log("원두 갈기");
  console.log("샷 내리기");
  console.log("얼음을 컵에 넣기");
  console.log("샷 넣기");
  console.log("물 넣기");
  console.log("망고 넣기");
});
