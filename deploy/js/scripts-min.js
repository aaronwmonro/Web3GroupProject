gsap.registerPlugin(MorphSVGPlugin,ScrollTrigger,DrawSVGPlugin);var uploadAnimationTimeline=gsap.timeline({paused:!0});gsap.set("#circle",{transformOrigin:"center "}),uploadAnimationTimeline.addLabel("downloadToMountain").addPause().to("#start",{duration:2,morphSVG:"#end"},"download").to("#circle",{duration:2,alpha:1,rotation:-1125},"download").to("#upload",{duration:1,alpha:0,y:25},"download").to("#start",{duration:.5,alpha:0}).to("#circle",{duration:.5,rotation:-1080,morphSVG:"#arrow-load"}).to("#circle",{duration:1,x:1e3,alpha:0,onComplete:slideMapIn}).addPause();var closeAnimationTimeline=gsap.timeline({paused:!0});closeAnimationTimeline.addLabel("closeToDownload").to("#start",{duration:2,morphSVG:"#end"},"download");var canYouSeeTheMap=!1,mapWidth=$("#pop-up").outerWidth();gsap.set("pop-up",{x:-mapWidth});var mapPopUpTimeline=gsap.timeline({paused:!0});function slideMapIn(){mapPopUpTimeline.play()}function hideShowMap(){console.log("working"),!1===canYouSeeTheMap?(canYouSeeTheMap=!0,uploadAnimationTimeline.play()):(canYouSeeTheMap=!1,mapPopUpTimeline.reverse(),uploadAnimationTimeline.reverse())}mapPopUpTimeline.from("#pop-up",{duration:.75,x:-1800}),$("#start").on("click",hideShowMap),$("#pop-up-x").on("click",hideShowMap);var downArrowTimeline=gsap.timeline();downArrowTimeline.from("#arrow",{duration:3,alpha:0,y:-200,ease:"bounce"},"+=1");var heroTextTimeline=gsap.timeline();heroTextTimeline.from("#hero-text-1",{duration:2,alpha:0,x:-500},"titleFade").from("#hero-text-2",{duration:2.5,alpha:0,y:-500,ease:"back"},"titleFade").from("#hero-text-3",{duration:2,alpha:0,x:500},"titleFade");var headerTimeline=gsap.timeline();headerTimeline.from("#header-container-2",{duration:2,y:100});var paraTimeline=gsap.timeline();paraTimeline.from("#bold-para-content",{duration:2,alpha:0,x:800},"paraFade").from("#para-content",{duration:2,alpha:0,x:-800},"paraFade"),ScrollTrigger.create({trigger:"#bold-para-content",start:"top 80%",end:"bottom 40%",animation:paraTimeline,scrub:2});var mapsTimeline=gsap.timeline();mapsTimeline.from("#map-title-content",{duration:3,alpha:0,x:1e3},"mapFade"),ScrollTrigger.create({trigger:"#map-title-content",start:"top 80%",end:"bottom 40%",animation:mapsTimeline,scrub:2});var armTimeline=gsap.timeline();armTimeline.from("#place",{duration:2,alpha:0,y:100},"armFade").from("#arm-bold",{duration:2,alpha:0,y:50},"-=1").from("#arm-regular",{duration:2.5,alpha:0,y:-50},"-=1"),ScrollTrigger.create({trigger:"#place",start:"top 90%",end:"bottom 65%",animation:armTimeline,scrub:2});var arrowTimeline=gsap.timeline();arrowTimeline.to("#arrow",{duration:3,scale:0}),ScrollTrigger.create({trigger:"#hero-text-1",start:"top 10%",end:"bottom 65%",animation:arrowTimeline});var armPhotoTimeline=gsap.timeline();armPhotoTimeline.from("#arm-container",{duration:5,alpha:0,scale:0}),ScrollTrigger.create({trigger:"#arm",start:"top 90%",end:"bottom 70%",animation:armPhotoTimeline,scrub:2});var logoTimeline=gsap.timeline();logoTimeline.from("#social",{duration:2,y:-100,alpha:0}),ScrollTrigger.create({trigger:"#footer",start:"top 90%",end:"bottom 100%",animation:logoTimeline,scrub:2});var footerTimeline=gsap.timeline();footerTimeline.from("#footer-text",{duration:3,alpha:0,y:100}),ScrollTrigger.create({trigger:"#footer",start:"top 90%",end:"bottom 100%",animation:footerTimeline,scrub:2,markers:!0}),gsap.to("#index-hero",{scrollTrigger:{trigger:"#index-hero",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"hero"}}),gsap.registerPlugin(MorphSVGPlugin,ScrollTrigger,DrawSVGPlugin);