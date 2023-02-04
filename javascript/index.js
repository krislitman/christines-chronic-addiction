var image = document.getElementById("imageFront");

image.addEventListener("click", function(){
    changeImage();
});

function changeImage(){
    if(image.id == "imageFront") {
        image.src = "images/CCA_business card - side 2.jpg";
        image.id = "imageBack"
    } else {
        image.src = "images/CCA_business card - side 1.jpg"
        image.id = "imageFront"
    }
}
