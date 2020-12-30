numBackgroundImages = 12;
let idx = 0;

function changeBackground() {
	idx = (idx + 1) % numBackgroundImages;
	imgNum = idx + 1;
   document.getElementById("gallery").style.backgroundImage = "url(images/gallery/" + imgNum  + ".jpg)";
}