$(function (){
    const photoDetails = $("#textHere");

    // Photo array. This will have to change once save button works.
    let photoArray = [
        {
            URL: "https://apod.nasa.gov/apod/image/2007/Mars2020launchKraus1024.jpg",
            Date: "07-03-2020",
            Description: "First photo",
        }, 
        {
            URL: "https://apod.nasa.gov/apod/image/2007/Kristine-Rose-Photography-20200616_001s1024.jpg",
            Date: "07-04-2020",
            Description: "Second photo",
        }, 
        {
            URL: "https://apod.nasa.gov/apod/image/2007/N6188_Cappelletti_960.jpg",
            Date: "07-05-2020",
            Description: "Third photo",
        }, 
        {
            URL: "https://apod.nasa.gov/apod/image/2007/ldn1251_jerahian1024.jpg",
            Date: "07-06-2020",
            Description: "Fourth photo",
        }, 
        {
            URL: "https://apod.nasa.gov/apod/image/2007/msv1000crop.jpg",
            Date: "07-07-2020",
            Description: "Fifth photo",
        },     
    ];
    console.log(photoArray);

    //Setting where to store image and setting photoIndex so the next and previous buttons work
    const imgDisplay = $("#imgCollection");
    let photoIndex = 0;

    //Displaying generic photo when switched to collection page
    $(imgDisplay).attr("src", "https://via.placeholder.com/400x300.jpg/000044/ffffff?text=Pictures+From+Space");
 
    //Next button event listener. Changes to next photo
    $("#btnCollectionNext").on("click", function(event) {
        event.preventDefault();

        //Setting photo url to varabible, changing src, and adding to page
        imageURL = photoArray[photoIndex].URL;
        console.log(`image ${photoIndex} is ${imageURL}`);
        $(imgDisplay).attr("src", imageURL);
     
        //Setting photo description to variable and adding to page
        let photoText = photoArray[photoIndex].Description;
        photoDetails.text(photoText);

        photoIndex++;

        //If photoIndex is greater than or equal to the photoArray length, set photoIndex to 0 and go back to the starting image
        if (photoIndex >= photoArray.length) {
            photoIndex = 0;
        };
     

    })


    //Previous button event listener. Changes to previous button
    $("#btnCollectionPrev").on("click", function(event) {
        event.preventDefault();

        //Setting photo url to varabible, changing src, and adding to page
        imageURL = photoArray[photoIndex].URL;
        console.log(`image ${photoIndex} is ${imageURL}`);
        $(imgDisplay).attr("src", imageURL);

        //Setting photo description to variable and adding to page
        let photoText = photoArray[photoIndex].Description;
        photoDetails.text(photoText);

        photoIndex--;

        //If photoIndex is less than or equal to 0, set photoIndex to index of last photo and go to last photo
        if (photoIndex <= 0) {
            photoIndex = photoArray.length - 1;
        };
    })

    // Generate a remove button to delete relevant images 

    // $("#btnCollection").on("click", function (event) {
    //     // Stops page from refreshing when button is clicked
    //     event.preventDefault();

    
    //     // photoArray.forEach(function(photoURL) {
    //     //     console.log(photoURL);
        
    //     //     let imageURL = photoURL;
    //     //     $("#imgSearch").attr("src", imageURL);
    //     //     //Need to call local storage
          
    //     // }) ;

        

        
    //     // show everything that has been stored locally 


    // })


});