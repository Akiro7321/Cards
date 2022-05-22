//let card = document.getElementsByClassName("card");

let card = document.querySelector(".card");

card.addEventListener("click", function(){
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
})