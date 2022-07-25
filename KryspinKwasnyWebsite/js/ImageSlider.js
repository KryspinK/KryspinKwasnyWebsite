var images = ["placeHolderPP.jpg", "dogs_1280p_0.jpg"];
var currentImage = 0;
var btnNxt = document.getElementById("btnNxt");

//var min = 0;
//var max = 1;


function Nxt(){

    if(currentImage == 1){
    //currentImage = 0;
        //document.getElementById("LiveImage").src= "image/" + ImgInfo();
        document.getElementById("LiveText").style.visibility = "visible";
        document.getElementById("LiveText2").style.visibility = "visible";


    }else

    currentImage ++;
    console.log(currentImage);
    document.getElementById("LiveText").style.visibility = "";
    document.getElementById("LiveText").innerHTML = "Woof Woof";
    document.getElementById("LiveText2").style.visibility = "hidden";
    document.getElementById("LiveImage").src= "image/" + ImgInfo();
    checkPage();

}

function Prev(){

    checkPage();

    if(currentImage == 0){
        //currentImage = 1;
        //document.getElementById("LiveImage").src= "image/" + ImgInfo();
        document.getElementById("LiveText").style.visibility = "visible";
        document.getElementById("LiveText2").style.visibility = "visible";

    }else
    currentImage --;
    document.getElementById("LiveImage").src= "image/" + ImgInfo();
    document.getElementById("LiveText").style.visibility = "visible";
    document.getElementById("LiveText").innerHTML = "Hey, I'm";
    document.getElementById("LiveText2").style.visibility = "visible";
    checkPage();

}

function ImgInfo(){
    return images[currentImage];
}

function checkPage(){

    if(currentImage == 0){
        document.getElementById("btnPrev").style.display = "none";
        document.getElementById("btnNxt").style.display = "block";
    } else if (currentImage == 1 ){
        document.getElementById("btnNxt").style.display = "none";
        document.getElementById("btnPrev").style.display = "block";
    }

}