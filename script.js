var navEle = document.createElement("nav");
var displayEle = document.createElement("div");
document.body.appendChild(navEle);
document.body.appendChild(displayEle);
var a=0;
var outputEle=document.createElement("div");
var headingEle = document.createElement("h1");
displayEle.appendChild(headingEle);

var nameEle = document.createElement("h2");

displayEle.appendChild(nameEle);

var pages = [
     "Home",
    "About",
    "Interact"
];

for(var i=0; i<pages.length; i++){
  pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
    writeStuff(pg);
  });
  this.button.innerHTML=pg;
  navEle.appendChild(this.button);
}

function writeStuff(pg){
  if(pg=="Home"){ 
  writePage();
}else if(pg=="About"){
  writePage1();
}else if(pg=="Interact"){
  writePage2();
}
}
function writePage(){
  displayEle.innerHTML="";
  headingEle.innerHTML="Home";
  displayEle.appendChild(headingEle);
}
function writePage1(){
  displayEle.innerHTML="";
  headingEle.innerHTML="About";
  nameEle.innerHTML="Navdeep Singh";
  displayEle.appendChild(headingEle);
  displayEle.appendChild(nameEle)
}
function writePage2(){
  displayEle.innerHTML="";
  this.button = document.createElement("button");
  headingEle.innerHTML="Interact";
  displayEle.appendChild(headingEle);
  displayEle.appendChild(this.button);
  this.button.innerHTML="Counter Button";
  this.button.addEventListener("click", function(){
     a=a+1;
  outputEle.innerHTML= "Counter:" + a;
  displayEle.appendChild(outputEle);
  });
}