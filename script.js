$(function() {

    // event listenter for button(s)


    // Dynamically add elements to page to display image 



    // Code to look at as help

    // $("button").on("click", function() {
    //     var person = $(this).attr("data-person");
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //       person + "&api_key=He4jd9legQAJb6OD02LNEROsh6vMm9Hp";
  
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     })
    //       .then(function(response) {
    //         var results = response.data;
  
    //         for (var i = 0; i < results.length; i++) {
    //           var gifDiv = $("<div>");
  
    //           var rating = results[i].rating;
  
    //           var p = $("<p>").text("Rating: " + rating);
  
    //           var personImage = $("<img>");
    //           personImage.attr("src", results[i].images.fixed_height.url);
  
    //           gifDiv.prepend(p);
    //           gifDiv.prepend(personImage);
  
    //           $("#gifs-appear-here").prepend(gifDiv);
    //         }
    //       });
    //   });
});