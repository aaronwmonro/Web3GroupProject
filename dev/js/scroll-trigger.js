// paragraph timeline
var paraTimeline = gsap.timeline();
paraTimeline.from("#bold-para-content",{duration:2, alpha:0, x: 800}, "paraFade")
                .from("#para-content",{duration:2, alpha:0, x: -800}, "paraFade")

                ScrollTrigger.create({
                    trigger: "#bold-para-content",
                    start: "top 80%",
                    end: "bottom 40%",
                    animation: paraTimeline,
                    scrub: 2
                    // markers: true
                });  
                
// maps timeline
var mapsTimeline = gsap.timeline();
mapsTimeline.from("#map-title-content",{duration:3, alpha:0, x: 1000}, "mapFade")

                ScrollTrigger.create({
                    trigger: "#map-title-content",
                    start: "top 80%",
                    end: "bottom 40%",
                    animation: mapsTimeline,
                    scrub: 2
                    // markers: true
                });

// maps timeline
var armTimeline = gsap.timeline();
armTimeline.from("#place",{duration:2, alpha:0, y:100}, "armFade")
            .from("#arm-bold",{duration:2, alpha:0, y:50}, "-=1") 
            .from("#arm-regular",{duration:2.5, alpha:0, y:-50}, "-=1") 

                ScrollTrigger.create({
                    trigger: "#place",
                    start: "top 90%",
                    end: "bottom 65%",
                    animation: armTimeline,
                    scrub: 2
                    // markers: true
                });

var arrowTimeline = gsap.timeline();
arrowTimeline.to("#arrow",{duration: 3, scale:0})

                ScrollTrigger.create({
                    trigger: "#hero-text-1",
                    start: "top 10%",
                    end: "bottom 65%",
                    animation: arrowTimeline
                    // scrub: 2
                    // markers: true
                });

var armPhotoTimeline = gsap.timeline();
armPhotoTimeline.from("#arm-container",{duration:5, alpha:0, scale:0})

                ScrollTrigger.create({
                    trigger: "#arm",
                    start: "top 90%",
                    end: "bottom 70%",
                    animation: armPhotoTimeline,
                    scrub: 2
                    // markers: true
                });

var logoTimeline = gsap.timeline();
logoTimeline.from("#social", {duration:2, y: -100, alpha: 0})

                ScrollTrigger.create({
                    trigger: "#footer",
                    start: "top 90%",
                    end: "bottom 100%",
                    animation: logoTimeline,
                    scrub: 2
                    // markers: true
                });

var footerTimeline = gsap.timeline();
footerTimeline.from("#footer-text", {duration:3, alpha:0, y:100})

                ScrollTrigger.create({
                    trigger: "#footer",
                    start: "top 90%",
                    end: "bottom 100%",
                    animation: footerTimeline,
                    scrub: 2,
                    markers: true
                });

/* ========================
    Hero Pinning
======================== */
gsap.to("#index-hero",{scrollTrigger:{
    trigger:"#index-hero",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom 76",
    // markers:true,
    id:"hero"
}})