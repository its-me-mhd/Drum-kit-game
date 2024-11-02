var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      
      
      var buttonElement= this.innerHTML;
      makeSound(buttonElement)

      buttonAnimation(buttonElement)
      
   })
}

document.addEventListener('keypress' , function(event) {
  var key = event.key
  makeSound(key);

  buttonAnimation(key);
})

function makeSound(key){
   switch (key) {
         
      case "w":
         var tom1 = new Audio("sounds/tom-1.mp3")
         tom1.play();
      
         break;

      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3")
         tom2.play();

         break;

      case "s" :
         var tom3 = new Audio("sounds/tom-3.mp3")
         tom3.play();

         break;
   
      case "d":
         var tom4 = new Audio("sounds/tom-4.mp3")
         tom4.play();
      
         break;

      case "j":
         var snare = new Audio("sounds/snare.mp3")
         snare.play();

         break;

      case "k" :
         var crash = new Audio("sounds/crash.mp3")
         crash.play();

         break;

      case "L":
         var kick = new Audio("sounds/kick-bass.mp3")
         kick.play();

         break;

   

   default: console.log("just press only the above keys")
   
         
   }
}

function buttonAnimation(currentKey) {
   
   var activeButton = document.querySelector(`.drum.${currentKey.toLowerCase()}`) ; 

  if(activeButton){
   activeButton.classList.add("pressed");
   setTimeout(() => {
     activeButton.classList.remove("pressed");
   }, 100);
  } else {
   console.log("the rest keys aren't working")
  }
   
 }
