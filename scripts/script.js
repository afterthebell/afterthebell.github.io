//w

var slide = 1;
function changeSlide() {
    console.log(slide);
    skibidiToilet();
}

function skibidiToilet() {
    if (slide === 1) {
        document.getElementById("mytexty").innerHTML = slide ;
    document.getElementsByTagName("carol")[0].setAttribute("id", "img1");
        slide++ ;
    } else if (slide === 2) {
        document.getElementById("mytexty").innerHTML = slide ;
        document.getElementsByTagName("carol")[0].setAttribute("id", "img2");
        slide++ ;
    } else if (slide === 3) {
        document.getElementById("mytexty").innerHTML = slide ;
        document.getElementsByTagName("carol")[0].setAttribute("id", "img3");
        slide = 1 ;
    }
}



setInterval(function() {
    changeSlide();

}, 3000);




// death

var hamburger = 0;

function hamburgClick() {
    console.log(hamburger);
    if (hamburger === 0){
        hamburger += 1;
        document.getElementsByTagName("nav")[0].setAttribute("id", "navshow");
        document.getElementById("hamburgerElement").innerHTML = "×";
    } else {
        hamburger = 0;
        document.getElementsByTagName("nav")[0].setAttribute("id", "navhide");
        // ≡
        document.getElementById("hamburgerElement").innerHTML = "≡";

    };
};

