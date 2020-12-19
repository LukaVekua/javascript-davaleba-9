var feri = document.getElementById('txt');
feri.style.color = "red";

var pirveli = document.getElementById("1");
pirveli.style.border = "2px dashed black";
pirveli.style.width = "200px";
pirveli.style.height = "50px";
pirveli.style.backgroundColor = "#eeeeee";
pirveli.style.position = "relative";
pirveli.style.left = "200px";
pirveli.style.top = "10px";


var meore = document.getElementById("2");
meore.style.border = "2px dashed black";
meore.style.width = "200px";
meore.style.height = "50px";
meore.style.backgroundColor = "#eeeeee";
meore.style.position = "relative";
meore.style.left = "200px";
meore.style.top = "30px";


var mesame = document.getElementById("3");
mesame.style.border = "2px dashed black";
mesame.style.width = "200px";
mesame.style.height = "50px";
mesame.style.backgroundColor = "#eeeeee";
mesame.style.position = "relative";
mesame.style.left = "200px";
mesame.style.top = "50px";


var meotxe = document.getElementById("4");
meotxe.style.border = "2px dashed black";
meotxe.style.width = "200px";
meotxe.style.height = "50px";
meotxe.style.backgroundColor = "#eeeeee";
meotxe.style.position = "relative";
meotxe.style.left = "200px";
meotxe.style.top = "70px";


var mexute = document.getElementById("5");
mexute.style.border = "2px dashed black";
mexute.style.width = "200px";
mexute.style.height = "50px";
mexute.style.backgroundColor = "#eeeeee";
mexute.style.position = "relative";
mexute .style.left = "200px";
mexute .style.top = "90px";

var photo = document.getElementById("surati");



function swapDiv(elm) {
    var previous = findPrevious(elm);
    if (previous) {
        elm.parentNode.insertBefore(elm, previous);
    }
}



function findPrevious(elm) {
    do {
        elm = elm.previousSibling;
    } while (elm && elm.nodeType != 1);
    return elm;
 }


var button_1 = document.getElementById('btn_1');
button_1.addEventListener('click',function () {
    var pirveli = document.getElementById("1");
    pirveli.parentNode.removeChild(pirveli);
})

var button_2 = document.getElementById('btn_2');
button_2.addEventListener('click',function () {
    var meore = document.getElementById("2");
    meore.parentNode.removeChild(meore);
})

var button_3 = document.getElementById('btn_3');
button_3.addEventListener('click',function () {
    var mesame = document.getElementById("3");
    mesame.parentNode.removeChild(mesame);
})

var button_4 = document.getElementById('btn_4');
button_4.addEventListener('click',function () {
    var meotxe = document.getElementById("4");
    meotxe.parentNode.removeChild(meotxe);
})

var button_5 = document.getElementById('btn_5');
button_5.addEventListener('click',function () {
    var mexute = document.getElementById("5");
    mexute.parentNode.removeChild(mexute);
})