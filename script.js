$(document).ready(function() {
    var magic = {};
    magic.possibleAnswers = ["Yes", "No", "Maybe so", "Of course", "It is certain", "Absolutely", "Never", "Never ever", "Ask again later", "In your dreams", "How dare you even ask"];

    $(".answer").hide();

    magic.askQuestion = function(question){
        $("img").effect("shake");
    }

});