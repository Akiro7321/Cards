//let card = document.getElementsByClassName("card");


let currentCard;


//event listener(click to flip) to each card
const cards = document.querySelectorAll(".card")
cards.forEach(Element => {
    Element.addEventListener("click", function(){flip(Element)})
})

//flip function
function flip(currentCard){
    let card = currentCard;
    if(!card.classList.contains("flip")) {
        card.classList.add("flip");
        setTimeout(function(){
            if(card.src.includes("sprites/front.png")) {
                card.src="sprites/back.png"
            } else
            card.src="sprites/front.png"
        }, 800);
        setTimeout(function(){card.classList.remove("flip")}, 1500)
    }
}
