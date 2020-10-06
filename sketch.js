
let t;
function start(){
 t=new logo(300,100,0,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="blue";
let strAr=[];
let str=document.getElementById("text1").value;
strAr=str.split(',');
star(t,strAr[0],strAr[1]);
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
