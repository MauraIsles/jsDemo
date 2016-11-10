/**
 * Created by cheny on 2016/11/10.
 */
function addLoadEvent(func) {
    var oldOnlad = window.onload;
    if(typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnlad();
            func();
        }
    }
}