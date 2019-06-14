
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
    var fart2 = new Audio('sounds/fart-2.wav');
       fart2.play();

      break;
      case "a":
      var fart7 = new Audio('sounds/fart-7.mp3');
         fart7.play();
       break;
       case "s":
        var fart8 = new Audio('sounds/fart-8.wav');
          fart8.play();
        break;
        case "d":
        var fart4 = new Audio('sounds/fart-wav-4.wav');
           fart4.play();
         break;
         case "j":
         var squeeze = new Audio('sounds/squeeze.mp3');
            squeeze.play();
          break;
          case "k":
          var fartlong = new Audio('sounds/fartlong.wav');
             fartlong.play();
           break;
           case "l":
           var messy = new Audio('sounds/messy.mp3');
              messy.play();
            break;



    default: console.log (buttonInnerHTML);

  }
}
