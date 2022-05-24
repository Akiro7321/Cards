//let card = document.getElementsByClassName("card");
let currentCard;
let card_object = [];
const cards = document.querySelectorAll(".card");

const butt = document.querySelector(".resetBtn");




//all cards face down
function shutCard() {
    cards.forEach(Element => {
        console.log(Element.getAttribute("src"));
        if(Element.getAttribute("src") != "sprites/back.png"){
            flipB(Element);
        }
    })
}
butt.addEventListener("click", shutCard)

//naming numbering and adding src to each card
let n = 1;
for (let index = 0; index < 52; index++) {
    
    if(index <= 12) {
        card_object[index] = {
        number: index,
        name: "hearts" + n,
        src: "hearts_" + n + ".png"
        }
    }
    else if(index <= 25) {
        card_object[index] = {
        number: index,
        name: "diamonds" + n,
        src: "diamonds_" + n + ".png"
        }
    }
    else if(index <= 38) {
        card_object[index] = {
        number: index,
        name: "clubs" + n,
        src: "clubs_" + n + ".png"
        }
    }
    else if(index <= 51) {
        card_object[index] = {
        number: index,
        name: "spades" + n,
        src: "spades_" + n + ".png"
        }
    }
    if(n < 13){
        n++;
    }else {
        n = 1;
    }
}

//event listener(click to flip) to each card
//cardSrc assignment
cards.forEach(Element => {
    Element.addEventListener("click", function(){flip(Element)})
    let randomNum = Math.floor(Math.random() * 51);
    let usedCard = card_object[randomNum];
    let cardSrc = "sprites/front/" + usedCard.src;
    Element.src = "sprites/back.png";
    Element.id = cardSrc;
})

//flip function
function flip(currentCard){
    let card = currentCard;
    if(!card.classList.contains("flip") && !card.src.includes(card.id)) {
        card.classList.add("flip");
        setTimeout(function(){
                card.src= card.id
        }, 800);
        setTimeout(function(){card.classList.remove("flip")}, 1500)
    }
}
//flip back
function flipB(currentCard){
    let card = currentCard;
    if(!card.classList.contains("flip")){
        card.classList.add("flip");

        setTimeout(function(){
            if(card.src.includes(card.id)) {
                card.src="sprites/back.png"
            }
        }, 800);
    }
    setTimeout(function(){card.classList.remove("flip")}, 1500)
}
