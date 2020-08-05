$(function () {

    //Materialize 
    //   $('.datepicker').datepicker();

    // event listenter for button(s)

    let category = "";
    let searchDate = $("#searchDate");
    const apodImg = $("#imgSearch");
    const photoDetails = $(".textHere");
    let marsQ = [];
    const mars = $("#Btn1");
    const Astronomy = $("#Btn2");
    const SpaceX = $("#Btn3");
    let photoArray = [];
    let photoObject = {};


    $(mars).on("click", function () {
        var settings = {
            "url": "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=999&camera=mast&api_key=DEMO_KEY",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            //console.log(response);
        })
            .then(function (response) {
                let results = response.data;
                console.log(results);
                for (let i = 0; i < 10; i++) {
                    console.log(response.photos.img_src[i]);
                    marsQ[i] = response.photos.img_src[i];
                }
                // const imgURL = response.img_src;
                // apodImg.attr("src", imgURL);
                // // const apodDiv = $("<div>");
                // const photoText = response.camera;
                // photoDetails.text(photoText);
            });
    });

    $(astronomy).on("click", function () {
        category = "apod";
        $(Astronomy).addClass("active")
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
        category = "spaceXPic";
        $(Astronomy).addClass("active")
        var settings = {
            "url": "https://api.spacexdata.com/v4/launches/upcoming",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          })
            .then(function (response) {
                let results = response.data;
                console.log(results);
                const imgURL = response.flickr_images;
                apodImg.attr("src", imgURL);
                // const apodDiv = $("<div>");
                const photoText = response.description;
                photoDetails.text(photoText);
            });
    });

    


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




    $("#btnSave").on("click", function () {
        addPhotoInfo();
        localStorage.setItem("photoInfo", JSON.stringify(photoArray));
    });



});