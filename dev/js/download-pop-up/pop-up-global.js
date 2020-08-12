var canYouSeeTheMap = false;

var mapWidth = $("#pop-up").outerWidth();

gsap.set("pop-up",{
    x: -mapWidth
})

var mapPopUpTimeline = gsap.timeline({
    paused: true
})
mapPopUpTimeline.from("#pop-up", {
    duration: 0.75,x: -1800})

function slideMapIn(){
    mapPopUpTimeline.play();
}

function hideShowMap() {
console.log("working");
    if (canYouSeeTheMap === false) {
        canYouSeeTheMap = true;
        // turn burger into x
        uploadAnimationTimeline.play();

        // mapPopUpTimeline.play();
    } else {
       
        // uploadAnimationTimeline.reverse();
        canYouSeeTheMap = false;
        // turn x into burger

        // uploadAnimationTimeline.invalidate().restart();
    }
}

function hideMap() {

    if (canYouSeeTheMap === false) {
        canYouSeeTheMap = true;
        // turn burger into x
        uploadAnimationTimeline.play();

        // mapPopUpTimeline.play();
    }
    else {
       
        // uploadAnimationTimeline.reverse();
        canYouSeeTheMap = false;
        // turn x into burger
        uploadAnimationTimeline.invalidate().reverse();
    }
}

var menuBackground = document.querySelector('#pop-up');
window.onclick = function (event) {
    if (event.target == menuBackground) {
        hideMap();
    }
}


$("#start").on("click", hideShowMap);

$("#pop-up").on("click", hideShowMap);

$("#pop-up-x").on("click", hideMap);



