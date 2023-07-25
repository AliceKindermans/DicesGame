var scoresGlobaux = [0, 0];
var currentScorePlayer1 = 0;
var currentScorePlayer2 = 0;
var currentPlayer = 0;
var finDuJeu = false;

function lancerDe() {
    if (!finDuJeu) {
        // Lancer du dé
        var resultat = Math.floor(Math.random() * 6) + 1;

        // Afficher le résultat
        var resultatDe = document.getElementById("resultatDe");
        resultatDe.innerHTML = "<img src='images/dice" + resultat + ".png' alt='Dice" + resultat + "'>";

        // Mettre à jour le Current score du currentPlayer
        if (resultat !== 1) {
            if (currentPlayer === 0) {
                currentScorePlayer1 += resultat;
                var currentScoreElement = document.getElementById("currentScorePlayer1");
            } else {
                currentScorePlayer2 += resultat;
                var currentScoreElement = document.getElementById("currentScorePlayer2");
            }
            currentScoreElement.textContent = currentPlayer === 0 ? currentScorePlayer1 : currentScorePlayer2;
        } else {
            // Passe au joueur suivant si le résultat est 1
            changerJoueur();
        }
    }
}

function hold() {
    if (!finDuJeu) {
        // Ajouter le current score  au score GLOBAL du joueur actuel
        scoresGlobaux[currentPlayer] += currentPlayer === 0 ? currentScorePlayer1 : currentScorePlayer2;

        // Mettre à jour le score GLOBAL affiché à l'écran
        var scoreGlobalElement;
        if (currentPlayer === 0) {
            scoreGlobalElement = document.getElementById("scorePlayer1Global");
        } else {
            scoreGlobalElement = document.getElementById("scorePlayer2Global");
        }
        scoreGlobalElement.textContent = scoresGlobaux[currentPlayer];

        // Vérifier si le joueur a gagné
        if (scoresGlobaux[currentPlayer] >= 100) {
            finDuJeu = true;
            var currentPlayerElement = document.getElementById("currentPlayer");
            currentPlayerElement.textContent = "Player " + (currentPlayer + 1) + " win ! ";
            var player1Icone = document.getElementById("player1Icone");
            var player2Icone = document.getElementById("player2Icone");
            player1Icone.style.display = "none";
            player2Icone.style.display = "none";
        } else {
            // Passe au joueur suivant
            changerJoueur();
        }
    }
}

function changerJoueur() {
    // Réinitialiser le score ROUND du joueur actuel
    if (currentPlayer === 0) {
        currentScorePlayer1 = 0;
        var currentScoreElement = document.getElementById("currentScorePlayer1");
    } else {
        currentScorePlayer2 = 0;
        var currentScoreElement = document.getElementById("currentScorePlayer2");
    }
    currentScoreElement.textContent = 0;

    // Masquer l'icône du joueur actuel
    var currentPlayerIcone;
    if (currentPlayer === 0) {
        currentPlayerIcone = document.getElementById("player1Icone");
    } else {
        currentPlayerIcone = document.getElementById("player2Icone");
    }
    currentPlayerIcone.style.display = "none";

    // Changer le joueur actuel
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;

    // Afficher l'icône du nouveau joueur actuel
    if (currentPlayer === 0) {
        currentPlayerIcone = document.getElementById("player1Icone");
    } else {
        currentPlayerIcone = document.getElementById("player2Icone");
    }
    currentPlayerIcone.style.display = "inline";


}




function newGame() {
    // Réinitialiser tous les scores et les paramètres du jeu
    scoresGlobaux = [0, 0];
    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;
    currentPlayer = 0;
    finDuJeu = false;

    var currentScoreElement = document.getElementById("currentScorePlayer1");
    currentScoreElement.textContent = 0;
    currentScoreElement = document.getElementById("currentScorePlayer2");
    currentScoreElement.textContent = 0;

    var scoreGlobalElement = document.getElementById("scorePlayer1Global");
    scoreGlobalElement.textContent = 0;
    scoreGlobalElement = document.getElementById("scorePlayer2Global");
    scoreGlobalElement.textContent = 0;

    var currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.textContent = "";
    var player1Icone = document.getElementById("player1Icone");
    var player2Icone = document.getElementById("player2Icone");
    player1Icone.style.display = "inline";
    player2Icone.style.display = "none";

    var resultatDe = document.getElementById("resultatDe");
    resultatDe.innerHTML = "";


}