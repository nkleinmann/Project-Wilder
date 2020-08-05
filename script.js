$(function () {

    //Materialize 
    //   $('.datepicker').datepicker();

    // event listenter for button(s)

    let category = "";
    let searchDate = $("#searchDate");
    const apodImg = $("#imgSearch");
    const photoDetails = $(".textHere");
    // mode buttons 
    const mars = $("#Btn1");
    const Astronomy = $("#Btn2");
    const SpaceX = $("#Btn3");
    const buttonSearchPrev = $("#btnSearchPrev");
    const buttonSearchNext = $("#btnSearchNext");
    const buttonSave = $("#btnSave");

    // mars result object 
    let marsQ = [];
    let photoArray = [];
    let photoObject = {};
    // SpaceX result object 
    let simpleRockets = [];
    let spaceXIndex = 0;

    $(mars).on("click", function () {
        $("div.apodDate").hide();
        category = "mars";
        $(mars).addClass("active")
        $(Astronomy).removeClass("active")
        $(SpaceX).removeClass("active")
        var settings = {
            "url": "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=999&camera=mast&api_key=DEMO_KEY",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        })
            .then(function (response) {
                const marsResults = response;
                console.log(marsResults.photos);
                // console.log(`an array of mars photos ${marsResults.photos}`);
                // photos.forEach(function(marsResults) {
                //     console.log(photos);
                // });
                for (let i = 0; i < 10; i++) {
                    console.log(marsResults.photos[i].id);
                    console.log(marsResults.photos[i].img_src);
                    // marsQ[i] = response.photos.img_src[i];
                }
                // const imgURL = response.img_src;
                // apodImg.attr("src", imgURL);
                // // const apodDiv = $("<div>");
                // const photoText = response.camera;
                // photoDetails.text(photoText);
            });
    });

    $(Astronomy).on("click", function () {
        $("div.apodDate").show();
        category = "apod";
        $(Astronomy).addClass("active")
        $(mars).removeClass("active")
        $(SpaceX).removeClass("active")
    });

    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        if (category === "apod") {
            var settings = {
                "url": "https://api.nasa.gov/planetary/apod?api_key=vpUsbRtc2uBC7le2YXjPI6Nk1E5HtnsevXOvkGTe&date=" + searchDate.val(),
                "method": "GET",
                "timeout": 0,
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            })

                .then(function (response) {
                    let results = response.data;
                    console.log(results);
                    const imgURL = response.url;
                    apodImg.attr("src", imgURL);
                    // const apodDiv = $("<div>");
                    const photoText = response.explanation;
                    photoDetails.text(photoText);
                });

        }
    });

    $(SpaceX).on("click", function () {
        $("div.apodDate").hide();
        category = "spaceXPic";
        $(SpaceX).addClass("active")
        $(Astronomy).removeClass("active")
        $(mars).removeClass("active")
        var settings = {
            "url": "https://api.spacexdata.com/v4/rockets",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          })
            .then(function (response) {
                const spaceXResults = response;
                console.log(spaceXResults);
                // thank you Mike Fearnley for this function 
                const flatArray = function(data) {
                    let temp = [];

                    data.forEach(function(rocket) {
                        rocket.flickr_images.forEach(function(url) {
                            temp.push({description: rocket.description, url});
                        })
                    });
                    return temp;
                }
                simpleRockets = flatArray(spaceXResults);
                console.log(simpleRockets);
                
                // const imgURL = response.flickr_images;
                apodImg.attr("src", simpleRockets[spaceXIndex].url);
                // const apodDiv = $("<div>");
                // const photoText = response.description;
                photoDetails.text(simpleRockets[spaceXIndex].description);
                spaceXIndex++;
            });
    });

    $(buttonSearchNext).on("click", function() {
        event.preventDefault();

        if(category === "spaceXPic") {
            $(apodImg).attr("src", simpleRockets[spaceXIndex].url);
            $(photoDetails).text(simpleRockets[spaceXIndex].description);
            console.log(spaceXIndex);
            spaceXIndex++;
            if (spaceXIndex >= simpleRockets.length) {
                spaceXIndex = 0;
            };
            console.log(spaceXIndex);
        }
    })  

    $(buttonSearchPrev).on("click", function() {
        event.preventDefault();

        if(category === "spaceXPic") {
            $(apodImg).attr("src", simpleRockets[spaceXIndex].url);
            $(photoDetails).text(simpleRockets[spaceXIndex].description);
            console.log(spaceXIndex);
            spaceXIndex--;
            if (spaceXIndex < 0)  {
                spaceXIndex = simpleRockets.length -1;
            };
            console.log(spaceXIndex);
        }
    })  
        


    // Dynamically add elements to page to display image 

    // link with key 
    // https://api.nasa.gov/planetary/apod?api_key=eyXRExqNDHTblcMXT6ShJzFdoCQWXOLEPjII8Qlc

    //Defining function to add array to local storage
    function addPhotoInfo() {
        photoObject = {
            date: searchDate.val(),
            url: apodImg.attr("src"),
            details: photoDetails.val()
        }
        console.log(photoObject);

        photoArray.push(photoObject);
        console.log(photoArray);

    }

    function spaceXInfo() {
        photoObject = {
            date: "",
            url: apodImg.attr("src"),
            details: photoDetails.val()
        }
        console.log(photoObject);

        photoArray.push(photoObject);
        console.log(photoArray);

    }



    buttonSave.on("click", function () {
        addPhotoInfo();
        localStorage.setItem("photoInfo", JSON.stringify(photoArray));

    });



});