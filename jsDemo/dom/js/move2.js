/**
 * Created by cheny on 2016/11/10.
 */
function prepareSlideshow() {
    //var preview = document.getElementById("preview");
    //preview.style.position = "absolute";
    //preview.style.top = "0px";
    //preview.style.left = "0px";

    // 确保元素存在
    if(!document.getElementById("linklist")) {
        return false;
    } 
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var img = document.createElement("img");
    img.setAttribute("src", "images/2.jpg");
    img.setAttribute("id", "preview");
    //img.style.position = "absolute";
    slideshow.appendChild(img);
    var list = document.getElementById("linklist");
    insertAfter(slideshow, list);
    var links = list.getElementsByTagName("a");

    links[0].onmouseover = function () {
        moveEvent("preview",-100,0,10);
    };
    links[1].onmouseover = function () {
        moveEvent("preview",-200,0,10);
    };
    links[2].onmouseover = function () {
        moveEvent("preview",-300,0,10);
    };
}
addLoadEvent(prepareSlideshow());