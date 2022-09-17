
var cards = [
  document.getElementById("hangman"),
  document.getElementById("rps"),
  document.getElementById("hhhh")
]

cards.forEach(item => {
  item.addEventListener('mouseover', function() {
    for(var i = 0; i < cards.length; i++){
      if(cards[i].id !== item.id){
        cards[i].style.opacity = "0";
      }
    }
  });
  item.addEventListener('mouseout', function() {
    for(var i = 0; i < cards.length; i++){
      if(cards[i].id !== item.id){
        cards[i].style.opacity = "1";

      }
    }
  });
})
