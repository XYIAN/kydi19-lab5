//lab5 js
/* global $ */
/* global _ */
$(document).ready(function(){
    //$("#images").html("<img src=''");
    function getRandomInt(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    $("#searchButton").on("click", search);
    var shuffName = ["WHALES", "LION" , "SHARK" , "SPACE", "NUT" , "CORVETTE"];
    //_.shuffle(shuffName);
    $("#keyword").val(shuffName[getRandomInt(0,5)]); 
    search(); 
    
    
    function search(){
        alert("searching!");
        
        var pic = $("#dropDown").val();
        
        //alert("dropdown val:" + $("#dropDown").val());
        
        $.ajax({
        method: "GET",
        url: "https://pixabay.com/api/",
        dataType: "json",
        data: { "key" : "5589438-47a0bca778bf23fc2e8c5bf3e&q=sun", "q" :$("#keyword").val(), "orientation" : pic },
        success: function(result,status)
        {
            result.hits = _.shuffle(result.hits);
            //$("#images").html(`<img src='${result.hits[0].webformatURL}'><br>Likes: ${result.hits[0].likes}`);
            
            $("#img1").html(`Likes: ${result.hits[0].likes}<br><img src='${result.hits[0].webformatURL}'  width="200">`);
            $("#img2").html(`Likes: ${result.hits[1].likes}<br><img src='${result.hits[1].webformatURL}'  width="200">`);
            $("#img3").html(`Likes: ${result.hits[2].likes}<br><img src='${result.hits[2].webformatURL}'  width="200">`);
            $("#img4").html(`Likes: ${result.hits[3].likes}<br><img src='${result.hits[3].webformatURL}'  width="200">`);
        
            
        }
        });//ajax
            
        }//END SEARCH FUNCTION
        
    $("#dropDown").on("change", function(){
        var pic = $("#dropDown").val();
          $.ajax({
        method: "GET",
        url: "https://pixabay.com/api/",
        dataType: "json",
        data: { "key" : "5589438-47a0bca778bf23fc2e8c5bf3e&q=sun", "q" :$("#keyword").val(), "orientation" : pic },
        success: function(result,status)
        {
            result.hits = _.shuffle(result.hits);
            //$("#images").html(`<img src='${result.hits[0].webformatURL}'><br>Likes: ${result.hits[0].likes}`);
            
            $("#img1").html(`Likes: ${result.hits[0].likes}<br><img src='${result.hits[0].webformatURL}'  width="200">`);
            $("#img2").html(`Likes: ${result.hits[1].likes}<br><img src='${result.hits[1].webformatURL}'  width="200">`);
            $("#img3").html(`Likes: ${result.hits[2].likes}<br><img src='${result.hits[2].webformatURL}'  width="200">`);
            $("#img4").html(`Likes: ${result.hits[3].likes}<br><img src='${result.hits[3].webformatURL}'  width="200">`);
        }
        });//ajax
    });
        
        
        
    
   
});//end document ready function