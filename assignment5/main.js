
var Topic1 ;
var Comment1 ;
var Comment2 ;

window.onload = GetElementID;
function GetElementID(){
    Topic1 = document.getElementById("topic1"); 
    Comment1 = document.getElementById("comment1"); 
    Comment2 = document.getElementById("comment2");
}
function postFunction()
{
    var postText = document.getElementById("text1").value; 
    if(Topic1.innerHTML == "")
    {
        Topic1.innerHTML = postText;
    }
    else if(Comment1.innerHTML == "") 
    {
        Comment1.innerHTML = postText;
    }
    else if(Comment2.innerHTML == "") 
    {
        Comment2.innerHTML = postText;
    }
    document.getElementById("text1").value = ""; 
}
function clearFunction()
{
    Topic1.innerHTML = null;
    Comment1.innerHTML = null;
    Comment2.innerHTML = null;
}
