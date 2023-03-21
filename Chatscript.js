var input = document.forms["form"]["input"];
var texts = document.getElementsByClassName("texts");
var chatbox = document.getElementById("chatbox");

function messege()
{
    chatbox.innerHTML += '<p class="texts"></p>';
    let len = texts.length;
    texts[len-1].innerHTML = input.value;
    input.value="";
}