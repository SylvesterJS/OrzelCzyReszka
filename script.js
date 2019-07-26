const coinArray = ["Orzeł", "Reszka"];
        let score = [0, 0];
        const message = document.querySelector(".message");
        const buttons = document.querySelectorAll("button");
 
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", tossCoin);
        }
 
        function tossCoin(e) {
            let playerGuess = e.target.innerText;
            let computerToss = Math.floor(Math.random() * coinArray.length);
            let computerGuess = coinArray[computerToss];
            message.innerHTML = "Komputer wybrał: " + computerGuess + "<br>";
            let output;
            if (playerGuess === computerGuess) {
                output = "Ty wygrywasz";
                score[0]++;
            }
            else {
                output = "Wygrywa komputer";
                score[1]++;
            }
            message.innerHTML += output + "<br>Ty: " + score[0] + " Komputer: " + score[1];
        }
