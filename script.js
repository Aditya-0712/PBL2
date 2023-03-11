var obj1 = document.getElementById("ham");
var obj2 = document.getElementById("sidebar");
obj1.onclick = function()
{
    obj1.classList.toggle("hamopen");
    obj2.classList.toggle("sideopen");
}

document.getElementById("heart").onclick = function()
{
    if (document.getElementById("heart").style.fill=="red")
    {
        document.getElementById("heart").style.fill="#14FFEC";
    }
    else 
    {
        document.getElementById("heart").style.fill="red";
    }
}

document.getElementById("heart1").onclick = function()
{
    if (document.getElementById("heart1").style.fill=="red")
    {
        document.getElementById("heart1").style.fill="#14FFEC";
    }
    else 
    {
        document.getElementById("heart1").style.fill="red";
    }
}

document.getElementById("heart2").onclick = function()
{
    if (document.getElementById("heart2").style.fill=="red")
    {
        document.getElementById("heart2").style.fill="#14FFEC";
    }
    else 
    {
        document.getElementById("heart2").style.fill="red";
    }
}

var obj3 = document.getElementById("filter");
var obj4 = document.getElementById("dup");
obj3.onclick = function ()
{
    obj4.classList.toggle("ddown");
}