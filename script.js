var obj1 = document.getElementById("ham");
var obj2 = document.getElementById("sidebar");
obj1.onclick = function()
{
    obj1.classList.toggle("hamopen");
    obj2.classList.toggle("sideopen");
}

function like(id)
{
    if (id.style.fill=="red")
    {
        id.innerHTML="<path d='M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z'/>"
        id.style.fill="#14FFEC";
    }
    else 
    {
        id.innerHTML="<path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z'/>";
        id.style.fill="red";
    }
}

var obj3 = document.getElementById("filter");
var obj4 = document.getElementById("dup");
obj3.onclick = function ()
{
    obj4.classList.toggle("ddown");
}

var obj5 = document.getElementById("popup");

function save(id)
{
    if (id.style.fill != "white")
    {
        id.innerHTML = "<path d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/>";

        id.style.fill="white";
        
        obj5.innerHTML = "<p>Bookmark Added</p>";
        obj5.style.height = "100%";
        setTimeout (() => {
            obj5.style.height = "0";
        }, 1000);
    }
    else 
    {
        id.innerHTML = "<path d='M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z'/>";

        id.style.fill="#14FFEC";

        obj5.innerHTML = "<p>Bookmark Removed</p>";
        obj5.style.height = "100%";
        setTimeout (() => {
            obj5.style.height = "0";
        }, 1000);
    }
}

var filter = document.getElementsByClassName("pcp1head")[0];
var row = document.getElementsByClassName("row")[0];
var caret = filter.getElementsByTagName("svg")[0];
var selected_filter = row.getElementsByTagName("p")[0];

row.onclick = function()
{
    if (filter.style.height != "auto")
    {
        filter.style.height = "auto";
        caret.style.transform = "rotate(180deg)";
    }
    else 
    {
        filter.style.height = "50px";
        caret.style.transform = "none";
    }
}

var posts = document.querySelectorAll(".pcpost");
var row_of_posts = document.querySelectorAll(".pcall");

function FilterSelect(id)
{
    selected_filter.innerHTML = id.innerHTML;
    filter.style.height = "50px";
    caret.style.transform = "none";

    if (selected_filter.innerHTML != "Your Interests")
    {
        var temp = row_of_posts[0].innerHTML;
        row_of_posts[0].innerHTML = row_of_posts[2].innerHTML;
        row_of_posts[2].innerHTML = temp;
    }
}