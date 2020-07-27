let buttonClick = new Audio()
buttonClick.src = "./assets/buttonClick.mp3";

 buttonClick.play()
 const button = document.getElementById("inviteButton")

 button.onclick = function() {
         buttonClick.play()
 }