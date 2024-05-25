
const element =document.querySelector(".level");
var level=0;
  while(element!=null){
	element=element.parentElement;
	level++;
  }

alert("The level of the element is:" ${level})