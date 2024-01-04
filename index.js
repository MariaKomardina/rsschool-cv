let menu_visible = false;
let menu = document.querySelector(".wrapper .content-section nav");
let burger = document.querySelector(".wrapper .content-section .nav-bar");
let links = document.querySelectorAll('nav a');

burger.addEventListener('click', () => {
  if(menu_visible == false) {
    menu.classList.toggle('open');
    menu_visible = true;
  }
  else {
    menu.classList.toggle('open');
    menu_visible = false;
  }
});

links.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
  })
});

function createBar(element) {
  for(i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    element.appendChild(div);
  }
}

let html = document.getElementById("html");
let js = document.getElementById("js");
let react = document.getElementById("react");
let material = document.getElementById("material");
let java = document.getElementById("java");
let boot = document.getElementById("boot");
let sql = document.getElementById("sql");
let vba = document.getElementById("vba");

createBar(html);
createBar(js);
createBar(react);
createBar(material);
createBar(java);
createBar(boot);
createBar(sql);
createBar(vba);

let count = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let en = false;

function effectSkills(){
  var skills = document.getElementById("skills");
  // console.log(skills);
  var distSkills = window.innerHeight - skills.getBoundingClientRect().top;
// console.log(distSkills)
  if(distSkills >= 300 && en == false){
    en = true;
    const intervalHtml = setInterval(function(){
      effectBar(html, 16, 0, intervalHtml);
    },100);
    const intervalJs = setInterval(function(){
      effectBar(js, 14, 1, intervalJs);
    },100);
    const intervalReact = setInterval(function(){
      effectBar(react, 7, 3, intervalReact);
    },100);
    const intervalMaterial = setInterval(function(){
      effectBar(material, 12, 4, intervalMaterial);
    },100);
    const intervalJava = setInterval(function(){
      effectBar(java, 13, 5, intervalJava);
    },100);
    const intervalBoot = setInterval(function(){
      effectBar(boot, 10, 6, intervalBoot);
    },100);
    const intervalSql = setInterval(function(){
      effectBar(sql, 11, 7, intervalSql);
    },100);
    const intervalVba = setInterval(function(){
      effectBar(vba, 6, 8, intervalVba);
    },100);
  }
}

function effectBar(elem, val, index, interval){
  count[index]++;
  x = count[index];
  console.log(x);
  console.log(elem);
  if(x < val){
    let el = elem.getElementsByClassName("e");
    el[x].style.backgroundColor = "#be264c";
  } else {
    clearInterval(interval);
  }
}

window.onscroll = function(){
  effectSkills();
}