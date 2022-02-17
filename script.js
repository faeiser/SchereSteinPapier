playerPoints = 0, computerPoints = 0, rounds = 0;
icons = ["scissors", "stone", "paper"]

function game(event) {

    document.getElementById("endText").innerHTML = "&nbsp;";

    playerChoice = event;
    computerChoice = icons[Math.floor(Math.random() * 3)];

    document.getElementById("playerImg").setAttribute("src", "icons/" + playerChoice + ".png");
    document.getElementById("computerImg").setAttribute("src", "icons/" + computerChoice + ".png");


    if (playerChoice == computerChoice) {
        document.getElementById("commend").innerHTML = "unentschieden!";
    }
    else if (playerChoice == icons[0]) {
        if (computerChoice == icons[1]) {
            document.getElementById("commend").innerHTML = "verloren!";
            computerPoints += 1;
        }
        else {
            document.getElementById("commend").innerHTML = "gewonnen!";
            playerPoints += 1;
        }
    }
    else if (playerChoice == icons[1]) {
        if (computerChoice == icons[0]) {
            document.getElementById("commend").innerHTML = "gewonnen!";
            playerPoints += 1;
        }
        else {
            document.getElementById("commend").innerHTML = "verloren!";
            computerPoints += 1;
        }
    }
    else {
        if (computerChoice == icons[0]) {
            document.getElementById("commend").innerHTML = "verloren!";
            computerPoints += 1;
        }
        else {
            document.getElementById("commend").innerHTML = "gewonnen!";
            playerPoints += 1;
        }
    }

    rounds += 1;

    document.getElementById("rounds").innerHTML = "Runde " + rounds;
    document.getElementById("palyerPoints").innerHTML = "Player: " + playerPoints;
    document.getElementById("computerPoints").innerHTML = "Computer: " + computerPoints;

    if (playerPoints == 3 || computerPoints == 3) {

        if (playerPoints == 3) {
            document.getElementById("commend").innerHTML = "dein Sieg!";
            document.getElementById("endText").innerHTML = "Gewonnen!";
            document.getElementById("endText").style.color = "green";
        } else {
            document.getElementById("commend").innerHTML = "dein Untergang!";
            document.getElementById("endText").innerHTML = "Verloren!";
            document.getElementById("endText").style.color = "red";
        }
        rounds = 0;
        playerPoints = 0;
        computerPoints = 0;
    }
}