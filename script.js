$(document).ready(function(){

    $("#submitButton").click(function(e){
        e.preventDefault();

        var accessToken = "";

        $.ajax({
            type: "POST",
            url: "https://www.reddit.com/api/v1/access_token",
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa("VHajlooUAOB94A" + ":" + "5i2w-Hghn-eAcxeI1TRK8ZSAlYc"));
            },
            dataType: "json",
            data: {grant_type: "client_credentials"},
            success: function(json){
                accessToken = json.access_token;
                console.log(json);
            }
        });

        $.ajax({
            type: "GET",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "bearer " + accessToken);
            },
            url: "https://oauth.reddit.com/r/showerthoughts/random",
            success: function(json){
                console.log(json);
            }

        });

    });
    
});
