/*const para = document.querySelector("h1");
document.querySelectorAll("p");
console.log(para.textContent);

let user = "Kim Joo Hyuk";

// get an element by ID
const userid = document.getElementById("userid");
document.querySelector("#userid");

// GET ELEMENTS BY THEIR CLASSNAME
document.querySelector(".classname");
document.getElementsByClassName("classname");

// GET ELEMENTS BY THEIR TAG NAME
document.getElementsByTagName("p");
document.querySelector("p");

// change text inside
para.innerText = "hello 종아!";

// forEach 함수 사용가능한것 qeurySelector vs getElements
// getElements는 안됨. Array만가능....
let h2s = document.querySelectorAll("h2");

h2s.forEach((h2) => {
  h2.innerText += " with additional Content";
  console.log(h2);
});

console.log("what");

let h2s = document.getElementsByTagName("h2");
h2s.forEach((element) => {
  console.log(element);
});


// MANIPULATING HTML script
h2s.innerHTML += "what";

///////////////
let kimListP = document.querySelector("div.second-half");
let count = 0;

const threekims = ["주혁", "도연", "웅"];

threekims.forEach((kim) => {
  count++;
  kimListP.innerHTML += `<p>Member #${count} : ${kim}</p>`;
});

// GET & SET attributes of HTML tags
// ex) link.getAttribute('class')
// set attribtue creates if attribute does not exist
// ex) link.setAttribute('class','className')

//DELETE

//////////////////////////////////////////////////

// CRUD classList
const content = document.querySelector("h1.a");
//C
content.classList.add("d");
// R
console.log(content);
console.log(content.className);
console.log(content.classList);
// U ?
// D
content.classList.remove("a");
*/
//////////////////////////////////////////////////
// textContent VS innerText
// innerText는 Visible한 text 만 리턴.
// textContent는 전부.

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  if (para.textContent.includes("never")) {
    para.classList.add("never");
  }
});

// TOGGLE method.
