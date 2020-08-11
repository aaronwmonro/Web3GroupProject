var downArrowTimeline = gsap.timeline();

downArrowTimeline.addLabel("downArrowTimelineReverse")
                    .from("#arrow",{duration: 3, alpha:0, y: -300, ease: "bounce"}, "arrowFade")
                    .addLabel("downArrowTimelineReverse")
                    .addPause()

var heroTextTimeline = gsap.timeline();

heroTextTimeline.from("#hero-text-1",{duration: 2, alpha:0, x: -500}, "titleFade")
                    .from("#hero-text-2",{duration: 2, alpha:0, y: -500}, "titleFade")
                    .from("#hero-text-3",{duration: 2, alpha:0, x: 500}, "titleFade")
                   
                    


                    