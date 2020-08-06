$(function () {
    const photoDetails = $(".textHere");
    let photoInfoArray = [];
    //Setting where to store image and setting photoIndex so the next and previous buttons work
    const imgDisplay = $("#imgCollection");
    let photoIndex = 0;
    let photoText = "";
    const buttonDelete = $("#btnDelete");
    const buttonSearchResults = $(".btnSearchResults");
    const buttonCollection = $(".btnCollection");
    const buttonCollectionNext = $("#btnCollectionNext");
    const buttonCollectionPrev = $("#btnCollectionPrev");
    const searchPage = $(".searchPage");
    const collectionPage = $(".collectionPage");
    const numberOfImages = $(".numberOfImages");
    const buttonClassTransport = $(".transport");
    let numberOfPhotos = 0;



    //Displaying generic photo when switched to collection page
    $(imgDisplay).attr("src", "https://images-assets.nasa.gov/image/as11-40-5874/as11-40-5874~orig.jpg");

    //Gets photoInfoArray from local storage
    function getLocalStorage() {
        photoInfoArray = JSON.parse(localStorage.getItem("photoInfo"));
        // if (photoInfoArray !== null) {
        //     console.log(photoInfoArray);
        //     console.log("It works!");
        // }
    };

    //When the delete button is clicked, delete relevant object in array from local storage
    buttonDelete.on("click", function () {
        // sets photoInfoArray to updated array (deletes object at index of photoIndex)
        console.log(photoIndex);
        photoInfoArray.splice(photoIndex, 1);
        console.log(photoInfoArray);
        console.log("Delete button hit");
        localStorage.setItem("photoInfo", JSON.stringify(photoInfoArray));
        getLocalStorage();
        refreshImages();

    });

    function refreshImages() {

        if (!photoInfoArray.length) {
            $(imgDisplay).attr("src", "https://images-assets.nasa.gov/image/as11-40-5874/as11-40-5874~orig.jpg");
            numberOfPhotos = 0;
            numberOfImages.html(numberOfPhotos);
            return;
        }
        //If photoIndex is greater than or equal to the photoArray length, set photoIndex to 0 and go back to the starting image
        if (photoIndex >= photoInfoArray.length) {
            photoIndex = 0;
        }
        //If photoIndex is less than or equal to 0, set photoIndex to index of last photo and go to last photo
        if (photoIndex < 0) {
            photoIndex = photoInfoArray.length - 1;
            console.log(photoIndex);
        }

        //Showing on screen
        imageURL = photoInfoArray[photoIndex].url;
        $(imgDisplay).attr("src", imageURL);
        photoText = photoInfoArray[photoIndex].details;
        photoDetails.text(photoText);

        numberOfPhotos = photoInfoArray.length;
        numberOfImages.html(numberOfPhotos);
        console.log(`This is: ${photoIndex} of ${numberOfPhotos}`);
    }

    //When the search results button is clicked show relevant HTML and hide other section
    buttonSearchResults.on("click", function () {
        searchPage.show();
        collectionPage.hide();
    });

    //When the collection button is clicked show relevant HTML and hide other section
    buttonCollection.on("click", function () {
        searchPage.hide();
        collectionPage.show();
        buttonClassTransport.show();
        getLocalStorage();
        refreshImages();
    });


    //Next button event listener. Changes to next photo
    buttonCollectionNext.on("click", function () {
        event.preventDefault();

        photoIndex++;
        refreshImages();


    });


    //Previous button event listener. Changes to previous button
    buttonCollectionPrev.on("click", function (event) {
        event.preventDefault();

        photoIndex--;
        refreshImages();

    });

   


});