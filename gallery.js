numBackgroundImages = 12;
let idx = 0;

function changeBackground() {
	idx = (idx + 1) % numBackgroundImages;
	imgNum = idx + 1;
   document.getElementById("gallery").style.backgroundImage = "url(images/gallery/" + imgNum  + ".jpg)";
}

function changeColors(images) {
    var i = 0;
    function doNext() {
        if (i >= images.length){
            i = 0;
        }
        document.getElementById("gallery-screen").src = images[i].image;
        setTimeout(doNext, images[i++].delay);
    }
    doNext();
}

window.onload = function() {
    changeColors([{image : "images/gallery/1.jpg", delay : 400},
             {image : "images/gallery/2.jpg", delay : 500},
             {image : "images/gallery/3.jpg", delay : 700},
             {image : "images/gallery/4.jpg", delay : 500},
             {image : "images/gallery/5.jpg", delay : 700}]);
};
