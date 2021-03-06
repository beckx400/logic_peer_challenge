$(function(){
    var buttonClicked = "";

    $(".operator").on("click", function(){
        buttonClicked = $(this).attr("class");

        $(".calculator").submit(function(event){
            event.preventDefault();
            var formData = $(".calculator").serialize();

            switch(buttonClicked){
                case "operator addition":
                    addData(formData);
                    getAnswer();
                    buttonClicked = "";
                    break;
                case "operator subtract":
                    subtractData(formData);
                    getAnswer();
                    buttonClicked = "";
                    break;
                case "operator multiply":
                    multiplyData(formData);
                    getAnswer();
                    buttonClicked = "";
                    break;
                case "operator divide":
                    divideData(formData);
                    getAnswer();
                    buttonClicked = "";
                    break;
                default:
                    console.log("Didn't work");
            }

        });
    });
    function addData(formData){
        $.ajax({
            type: "POST",
            url: "operation/add",
            data: formData
        }).done(function(){
            console.log("ADDED");
        });
    }
    function subtractData(formData){
        $.ajax({
            type: "POST",
            url: "operation/subtract",
            data: formData
        }).done(function(){
            console.log("Subtracted");
            getAnswer();
        });
    }
    function multiplyData(formData){
        $.ajax({
            type: "POST",
            url: "operation/multiply",
            data: formData
        }).done(function(){
            console.log("Multiplied");
            getAnswer();
        });
    }
    function divideData(formData){
        $.ajax({
            type: "POST",
            url: "operation/divide",
            data: formData
        }).done(function(){
            console.log("Divided");
            getAnswer();
        });
    }


    function getAnswer(){

        $.ajax({
            url: 'operation/answer'
        }).done(function(response){
            var message = "<h2 class='answer'>Your answer is: " + response + "!</h3>"
            $(".answer").html(message);
        });
    }
});