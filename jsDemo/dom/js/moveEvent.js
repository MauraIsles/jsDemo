/**
 * Created by cheny on 2016/11/10.
 */
function moveEvent(elementId,final_x,final_y,interval) {
    var element = document.getElementById(elementId);
    if(element.movement) {
        clearTimeout(element.movement);
    }
    if(!element.style.left) {
        element.style.left = "0px";
    }
    if(!element.style.top) {
        element.style.top = "0px";
    }
    var xops = parseInt(element.style.left);
    var yops = parseInt(element.style.top);
    if(xops == final_x && yops == final_y) {
        return true;
    }
    var distX = Math.abs(Math.ceil((final_x-xops)/10));
    var distY = Math.abs(Math.ceil((final_y-yops)/10));
    if(xops < final_x) {
        xops += distX;
    }
    if(xops > final_x) {
        xops -= distX;
    }
    if(yops < final_y) {
        yops += distY;
    }
    if(yops > final_y) {
        yops -= distY;
    }
    element.style.left = xops + "px";
    element.style.top = yops + "px";
    var repeat = "moveEvent('" + elementId + "'," + final_x + "," + final_y + "," + interval + ")";
    element.movement = setTimeout(repeat,interval);
}