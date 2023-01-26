const body = document.querySelector("body");
let red="";
let green="";
let blue="";

let colorCode = prompt("Lütfen kaç tane renk kodu istediğinizi giriniz ")
for (let i = 1; i <= colorCode; i++){

         red=Math.round(Math.random(0)*255);
         green=Math.round(Math.random(0)*255);
         blue=Math.round(Math.random(0)*255);
         document.writeln( "rgb("+red+","+green +","+blue+")" + "<br>");

}
    const button = document.querySelector("button");

    function color(){
         red=Math.round(Math.random(0)*255);
         green=Math.round(Math.random(0)*255);
         blue=Math.round(Math.random(0)*255);
         document.body.style.backgroundColor="rgb("+red+","+green +","+blue+")";
    }
    