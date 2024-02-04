

// the nav bar function
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//the window scroll button
  let albutton= document.getElementById("alBtn")
			
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
   if(document.body.scrollTop > 20 || 
   document.documentElement.scrollTop > 20){
     albutton.style.display = "block";
    }else{
       albutton.style.display = "none";
    }
}
 function topFunction(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }



//that is the text runing rout
 let containerEl = document.querySelector(".container-ff")
 let careers = ["Designer", "Front-end Developer and Intuitive HTML E-mail Templates Creater..!", "Self-Taught.???"];
let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
characterIndex ++;
containerEl.innerHTML = `
    <h1>I AM ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    if(characterIndex === careers[careerIndex].length){
     careerIndex++
     characterIndex = 0
    }

    if(careerIndex === careers.length){
     careerIndex = 0; 
    }
   setTimeout(updateText, 300);
}  

 