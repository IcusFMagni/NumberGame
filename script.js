var randomNumber = null;

$(document).ready(onReady);

function onReady() {
    $('#gamebox').css('border', 'solid', 'black');



    

    $('#gamebox').append('<button id="newGameButton">New Game</button>');
    $('#gamebox').append('<p id="clue"><p>');
    $('#gamebox').on('click', "#newGameButton", newGame);
    $('#gamebox').on('click', '#submit', submitGuess);



    
}

function newGame () {
    console.log('newgameclick')
    randomNumber = Math.floor((Math.random()*10)+1);
    console.log (randomNumber)
    $inputBox = $('<input type="text" id="guess" value= "Guess" />')
    $('#gamebox').append($inputBox);
    $('#newGameButton').replaceWith('<button id="submit">Submit</button>');
    $('#gamebox').css('background-color', 'royalblue');
    $('#clue').replaceWith('<p id="clue"><p>');
}

function submitGuess() {
    var guessNumber = $('#guess').val()

    if (guessNumber > randomNumber) {
        $('#gamebox').css('background-color', 'orange');
        $('#clue').replaceWith('<p id="clue">Too Big<p>');
    }
    else if (guessNumber < randomNumber) {
        $('#gamebox').css('background-color', 'yellow');
        $('#clue').replaceWith('<p id="clue">Too Small<p>')
    }
    else if (guessNumber == randomNumber) {
        $('#gamebox').css('background-color', 'green')
        $('#clue').replaceWith('<p id="clue">Correct<p>')
        $('#submit').replaceWith('<button id="newGameButton">New Game</button>')
        $('#guess').remove()
    }
    else {
        $('gamebox').css('background-color', 'purple')
        $('#clue').replaceWith('WTF')
    }
}
