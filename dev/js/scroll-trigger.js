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
                    trigger: "#para-content",
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