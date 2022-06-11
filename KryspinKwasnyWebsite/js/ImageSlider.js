var images = ["placeHolderPP.jpg", "dogs_1280p_0.jpg"];
var currentImage = 0;


function Nxt(){

    if(currentImage == 1){

    }else

    currentImage ++;
    console.log(currentImage);
    document.getElementById("LiveImage").src= "image/" + ImgInfo();
}

function Prev(){
    if(currentImage == 0){


    }else
    currentImage --;
    document.getElementById("LiveImage").src= "image/" + ImgInfo();

}

function ImgInfo(){
    return images[currentImage];
}