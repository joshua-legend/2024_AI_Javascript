// DOM[HTML+CSS]

// element type
const div = document.createElement("div");
div.innerText = "샤브샤브";
div.style.color = "red";
document.body.appendChild(div);

// 버튼 태그 3개만드셈 [아메리카노] [에이드] [라떼]
// ["아메리카노", "에이드", "라떼"].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v;
//   button.style.backgroundColor = "skyblue";
//   button.style.color = "white";
//   document.body.appendChild(button);
// });

// [아메리카노,노랑색,검은색] [에이드,핑크색,하얀색] [라떼,하늘색,주황색]
// [
//   { name: "아메리카노", bg: "yellow", color: "black" },
//   { name: "에이드", bg: "pink", color: "white" },
//   { name: "라떼", bg: "skyblue", color: "orange" },
// ].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v.name;
//   button.style.backgroundColor = v.bg;
//   button.style.color = v.color;
//   document.body.appendChild(button);
// });

// 사이트의 기획 먼저 파악해야함
// [html + css] + [js]

// className
// container.className = "container"

const container = document.createElement("div");

// classList
container.classList.add("container"); // <div class="container"> </div>

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box);

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgroundColor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
