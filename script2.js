$(function (){
    const photoDetails = $(".textHere");
    let photoInfoArray = []; 
    //Setting where to store image and setting photoIndex so the next and previous buttons work
    const imgDisplay = $("#imgCollection");
    let photoIndex = 0;
    let photoText = "";
 

    

    //Displaying generic photo when switched to collection page
    $(imgDisplay).attr("src", "https://via.placeholder.com/400x300.jpg/000044/ffffff?text=Pictures+From+Space");

    //Gets photoInfoArray from local storage
    function getLocalStorage() {
        photoInfoArray = JSON.parse(localStorage.getItem("photoInfo"));
        if (photoInfoArray !== null) {
            console.log(photoInfoArray);
            console.log("It works!");
        }
    };

    // //When the delete button is clicked, delete relevant object in array from local storage
    // $("#btnDelete").on("click", function() {
    //     // sets photoInfoArray to updated array (deletes object at index of photoIndex)
    //     photoInfoArray = photoInfoArray.splice(photoIndex, 1);
    //     console.log(photoInfoArray);
    // })

    //When the search results button is clicked show relevant HTML and hide other section
    $(".btnSearchResults").on("click", function() {
        $(".searchPage").show();
        $(".collectionPage").hide();
    });

    //When the collection button is clicked show relevant HTML and hide other section
    $(".btnCollection").on("click", function() {
        $(".searchPage").hide();
        $(".collectionPage").show();
        getLocalStorage();
        let numberOfPhotos = photoInfoArray.length.toString();
        $(".numberOfImages").html(numberOfPhotos);
    });

    
    //Next button event listener. Changes to next photo
    $("#btnCollectionNext").on("click", function() {
        event.preventDefault();

        //Setting photo url to varabible, changing src, and adding to page
        imageURL = photoInfoArray[photoIndex].url;
        console.log(`image ${photoIndex} is ${imageURL}`);
        $(imgDisplay).attr("src", imageURL);
     
        //Setting photo description to variable and adding to page
        photoText = photoInfoArray[photoIndex].details;
        photoDetails.text(photoText);

        photoIndex++;

        //If photoIndex is greater than or equal to the photoArray length, set photoIndex to 0 and go back to the starting image
        if (photoIndex >= photoInfoArray.length) {
            photoIndex = 0;
        };
     

    });


    //Previous button event listener. Changes to previous button
    $("#btnCollectionPrev").on("click", function(event) {
        event.preventDefault();

        //Setting photo url to varabible, changing src, and adding to page
        imageURL = photoInfoArray[photoIndex].url;
        console.log(`image ${photoIndex} is ${imageURL}`);
        $(imgDisplay).attr("src", imageURL);

        //Setting photo description to variable and adding to page
        photoText = photoInfoArray[photoIndex].details;
        photoDetails.text(photoText);
        console.log(photoText);

        photoIndex--;

        //If photoIndex is less than or equal to 0, set photoIndex to index of last photo and go to last photo
        if (photoIndex < 0) {
            photoIndex = photoInfoArray.length-1;
            console.log(photoIndex);
        };    
    });


});