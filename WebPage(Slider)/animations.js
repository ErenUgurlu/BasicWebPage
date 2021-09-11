function rightFeedbacks() {
    document.getElementById("rightPlaceholder").style.background = "#FFFFFF";
    document.getElementById("leftPlaceholder").style.background = "none";
    document.getElementById("leftPlaceholder").style.border = "2px solid #FFFFFF";
    document.getElementById("feedbacks").style.color = "#4F5362";
    document.getElementById("testimonials").style.color = "#FFFFFF";

    document.getElementById("slider").style.display="none"
    document.getElementById("input").style.display="block"
    
    
}
function leftTestimonials() {
    document.getElementById("leftPlaceholder").style.background = "#FFFFFF";
    document.getElementById("rightPlaceholder").style.background = "none";
    document.getElementById("rightPlaceholder").style.border = "2px solid #FFFFFF";
    document.getElementById("testimonials").style.color = "#4F5362";
    document.getElementById("feedbacks").style.color = "#FFFFFF";

    document.getElementById("slider").style.display="block"
    document.getElementById("input").style.display="none"
    
}


let paragraphs = ["“Your affordability calculator saved me some serious time to focus on what I can actually buy.”", "“second paragraph”", "“third paragraph”"]
let counter = 0;
let interval = 0;


function show(id) {
    var element = document.getElementById(id);
    opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"));
    element.style.display = "block";
    if (opacity < 1) {

        opacity = opacity + 0.1;
        element.style.opacity = opacity;
    }
    else {
        clearInterval(interval);
    }
}
function hide(id) {
    var element = document.getElementById(id);
    opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"));
    if (opacity > 0) {
        opacity = opacity - 0.1;
        element.style.opacity = opacity;

    }
    else {

        element.style.display = "none";
        clearInterval(interval);
    }
}
function fadeOut(id) {
    interval = setInterval(hide, 20, id);
}
function fadeIn(id) {
    interval = setInterval(show, 20, id);
}
function slideRight() {
    counter++;
    if (counter >= 3) {
        counter = 0;
    }
    fadeOut("sliderData");
    setTimeout(() => {
        document.getElementById("sliderData").innerText = paragraphs[counter];
        fadeIn("sliderData");
    }, 700)


}
function slideLeft() {
    counter--;
    if (counter <= -1) {
        counter = 2;
    }
    fadeOut("sliderData");
    setTimeout(() => {
        document.getElementById("sliderData").innerText = paragraphs[counter];
        fadeIn("sliderData");
    }, 700)
}