// Translate these to JQuery 
// Javascript from previous version is in comment-form


var imageSelector = "[data-pictureBox]";
var imageArray = document.querySelectorAll(imageSelector);

var bigImageSelector = "[data-target]";
var bigImageTarget = document.querySelector(bigImageSelector);


var theX = "[data-theX]";
var xFrame = document.querySelector(theX);



// need something that grabs everything in the mainImageBox to move it to the front
var moveToFront= "[data-front]";
var bigImageFrame = document.querySelector(moveToFront);



// All of these classList.add functions dont worl in jquery. Jquery has its own version of these functions tht i havent learned yet.

imageArray.forEach(function (lol) {
    lol.addEventListener('click', function(clickEvent){
        clickEvent.preventDefault();
        bigImageTarget.classList.add('bigContent');
        bigImageTarget.setAttribute('src', lol.getAttribute('src')); 
        bigImageFrame.classList.add('moveToFront');
    });
});






bigImageTarget.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    bigImageFrame.classList.remove('moveToFront');
});



xFrame.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    bigImageFrame.classList.remove('moveToFront');
});


