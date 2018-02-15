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
                   $("#thought").fadeOut(1000, function(){
                       if (json.quoteAuthor === ''){
                           json.quoteAuthor = 'Unknown';
                       }

                       var newMessage = ('&quot;' + json.quoteText 
                               + '&quot;<div id="speaker">-' 
                               + json.quoteAuthor + '</div>'); 

                       $("#thought").html(newMessage);

                       $("#thought").fadeIn(1000); 
                  });
                }
        });

    });
    
});
