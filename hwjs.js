/**
 * Created by СПС on 03.10.2017.
 */
//Task first
var arr = [];
var n = document.getElementById('new');
function showArray (array) {
    var out = '';
    for (var i = 0; i < arr.length; i++) {
        out += i + ' ' + '-' + ' ' + arr[i] + ';' + '<br>';
    }
    return out;
};

//Task second
var a = document.getElementById('ind');
var b = document.getElementById('val');
document.getElementById('btn').onclick = function () {
    arr[a.value] = b.value;
    n.innerHTML = showArray(arr);
};

//Task third
document.getElementById('btn1').onclick = function () {
    n.innerHTML=showArray(arr.pop());
};

//Task fourth
document.getElementById('btn2').onclick = function () {
    n.innerHTML=showArray(arr.shift());
};

//Task fifth
document.getElementById('btn3').onclick = function () {
    n.innerHTML=showArray(arr.push(b.value));
};

//Task sixth
document.getElementById('btn4').onclick = function () {
    n.innerHTML=showArray(arr.unshift(b.value));
};

