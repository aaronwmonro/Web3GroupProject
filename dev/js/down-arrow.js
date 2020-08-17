var downArrowTimeline = gsap.timeline();

downArrowTimeline.from("#arrow",{duration: 3, alpha:0, y: -200, ease: "bounce"}, "+=1")
                    // .addLabel("downArrowTimelineReverse")
                    // .addPause()

var heroTextTimeline = gsap.timeline();

heroTextTimeline.from("#hero-text-1",{duration: 2, alpha:0, x: -500}, "titleFade")
                    .from("#hero-text-2",{duration: 2.5, alpha:0, y: -500,  ease: "back"}, "titleFade")
                    .from("#hero-text-3",{duration: 2, alpha:0, x: 500}, "titleFade")
                    


  var headerTimeline = gsap.timeline();

headerTimeline.from("#header-container-2",{duration: 2, y: 100})             
                    


                    