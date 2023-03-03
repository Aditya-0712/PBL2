var obj1 = document.getElementById("ham");
var obj2 = document.getElementById("sidebar");
obj1.onclick = function()
{
    obj1.classList.toggle("hamopen");
    obj2.classList.toggle("sideopen");
}