/**
 * Created by cheny on 2016/11/10.
 */
function positionMessage() {
    var message = document.getElementById("message");
    message.style.position = "absolute";
    message.style.top = "50px";
    message.style.left = "100px";
    moveEvent("message",100,200,10);

    var message2 = document.getElementById("message2");
    message2.style.position = "absolute";
    message2.style.top = "100px";
    message2.style.left = "50px";
    moveEvent("message2",200,100,10);
}

addLoadEvent(positionMessage());