$(document).ready(function() {
    var magic = {};
    magic.possibleAnswers = ["Yes", "No", "Maybe so", "Of course", "It is certain", "Absolutely", "Never", "Never ever", "Ask again later", "In your dreams", "How dare you even ask"];

    $(".answer").hide();

    magic.askQuestion = function(question) {
        $(".8ballgif").effect("shake");
        $(".8ballgif").attr("src", "images/magic8ball.png")
        $(".answer").fadeIn(4000);

        var randomNum = Math.random();
        var randomNumForAnswers = randomNum * this.possibleAnswers.length;
        var randomIndex = Math.floor(randomNumForAnswers);
        var magicAnswer = this.possibleAnswers[randomIndex];

        $(".answer").text(magicAnswer);

        console.log(question);
        console.log(magicAnswer);
    };


});