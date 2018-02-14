$(document).ready(function(){

    var numberOfComics = 0;

    $.ajax({
        type: "GET",
        url: "https://xkcd.com/info.0.json",
        dataType: "json",
        success: function(json){
            console.log(json);
            numberOfComics = json.num;
        }
    });

    $("#submitButton").click(function(e){
        e.preventDefault();

        var random = Math.floor(Math.random() * numberOfComics) + 1;

        $.ajax({
            type: "GET",
            dataType: "json",
            url: "https://xkcd.com/" + random + "/info.0.json",
            success: function(json){
                console.log(json);
            }

        });

    });
    
});
