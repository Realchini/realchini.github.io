var keksObj = document.getElementById('keks');

keksObj.onclick = function()
{
    this.style.background = 'blue';
}

var tablya = document.getElementsByClassName('stroka');
tablya.onclick = function()
{
    this.style.background = 'green';
}

var pre = document.getElementById('predmet')
pre.onclick = function()
{
    this.style.background = 'green';
}
