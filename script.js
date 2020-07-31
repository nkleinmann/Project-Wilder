$(function () {

    //Materialize 
    //   $('.datepicker').datepicker();

    // event listenter for button(s)

    var searchDate = "2020-07-28";
    const apodImg = $("#imgSearch");
    const photoDetails = $("#textHere");


    $("#Btn2").on("click", function () {
        var settings = {
            "url": "https://api.nasa.gov/planetary/apod?api_key=vpUsbRtc2uBC7le2YXjPI6Nk1E5HtnsevXOvkGTe&date=" + searchDate,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        })
        .then(function(response) {
            let results = response.data;
            console.log(results);
            const imgURL = response.url;
            apodImg.attr("src", imgURL);
            // const apodDiv = $("<div>");
            const photoText = response.explanation;
            photoDetails.text(photoText);
         });
    })
    

    // Dynamically add elements to page to display image 








    // link with key 
    // https://api.nasa.gov/planetary/apod?api_key=eyXRExqNDHTblcMXT6ShJzFdoCQWXOLEPjII8Qlc

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