$(document).ready(function(){


    $("#submitButton").click(function(e){
        e.preventDefault();

        $.ajax({
              url: "https://api.forismatic.com/api/1.0/",
              jsonp: "jsonp",
              dataType: "jsonp",
              data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
              },
            success: function(json){
                    console.log(json);
                   $("#thought").fadeOut(1000, function(){
                       $("#thought").html(json.quoteText); 
                       $("#thought").fadeIn(1000);
                  });
                }
        });

    });
    
});
