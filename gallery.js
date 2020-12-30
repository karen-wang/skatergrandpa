function preloadImages(images) {
	for (image in images) {
		var img = new Image();
    	img.src = image.url;
	}
}

function changeColors(images) {
    var i = 0;
    function doNext() {
        if (i >= images.length){
            i = 0;
        }
        document.getElementById("retro-tv").style.backgroundImage = "url(" + images[i].url + ")";
        setTimeout(doNext, images[i++].delay);
    }
    doNext();
}

window.onload = function() {
	var images = [{url : "images/gallery/1.jpg", delay : 400},
             {url : "images/gallery/2.jpg", delay : 500},
             {url : "images/gallery/3.jpg", delay : 700},
             {url : "images/gallery/4.jpg", delay : 500},
             {url : "images/gallery/5.jpg", delay : 700}];
	preloadImages(images);
    changeColors(images);
};
