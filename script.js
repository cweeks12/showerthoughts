$(document).ready(function(){


    $("#submitButton").click(function(e){
        e.preventDefault();

        $.ajax({
            type: "GET",
            url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
            dataType: "json",
            success: function(json){
                console.log(json.quoteText);
               $("#thought").html(json.quoteText); 
            }
        });

    });
    
});
