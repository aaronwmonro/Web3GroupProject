// @codekit-prepend "gsap-register.js";
// @codekit-prepend "morph-svg.js";
// @codekit-prepend "down-arrow.js";
// @codekit-prepend "scroll-trigger.js";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

function togglePopup()
{document.getElementById("popup-1").classlist.toggle("active");}