// gsap.registerPlugin(MorphSVGPlugin);

// // TweenMax.to("#download", 2, {morphSVG: "#moutains"});

// gsap.from("start", 2,{morphSVG:"#end"});

var uploadAnimationTimeline = gsap.timeline({
    paused: true
});

gsap.set("#circle", {
    transformOrigin: "center "
});



// uploadAnimationTimeline.addLabel("downloadToMountain")
//                         .to("#start", {duration: 3, morphSVG: "#end"}, "-=0.5", "download")
//                         .to("#circle", {duration: 3, alpha: 1, rotation: -1080}, "download")

uploadAnimationTimeline.addLabel("downloadToMountain")
                        .addPause()
                        .to("#start", {duration: 2, morphSVG: "#end"}, "download")
                        .to("#circle", {duration: 2, alpha: 1, rotation: -1125}, "download")
                        .to("#upload", {duration: 1, alpha: 0, y:25}, "download")
                        .to("#start", {duration: .5, alpha:0} )
                        .to("#circle", {duration: .5, rotation: -1080, morphSVG: "#arrow-load"})
                        .to("#circle", {duration: 1, x:1000, alpha:0, onComplete: slideMapIn})
                        .addPause()







// gsap.to("#start", {duration: 2, morphSVG: "#end"});


var closeAnimationTimeline = gsap.timeline({
    paused: true
});

closeAnimationTimeline.addLabel("closeToDownload")
.to("#start", {duration: 2, morphSVG: "#end"}, "download")
                        


