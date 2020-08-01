# Project-Wilder

Image object properties include;
  imageURL; the link to the picture
  imageInfo; the story behind the image. (apod comes with significent story attached, for the others, we may need to build that.)
  imageDate; the search parameter we use to get the image in the first place.

Mars rover API delivers hundreds of images on every request. Only the first 10 need to be captured for this project. Search parameters should include earth_date and camera. (don't use "sol" search parameter) 



![image](PfSUIv1.1.png "basic layout")

Collection and Search Results buttons should each have on and off states with changing colors and be mutually exclusive (like radio buttons) so one will always be active and the other inactive.
When "Collection" is active, a "delete" button should appear to the left of it. 
When "Search Results" button is active, a "save" button should appear to the right of it.
There will be buttons for next and previous pictures that disappear when at last and first image. 
the Mars, Astronomy, and EPIC buttons will be used to activate the search for those catagories.

The space currently occupied by Btn 4, 5, & 6 will be the search date entry

each photo will have a little story to go with it that will appear in the details text area.

