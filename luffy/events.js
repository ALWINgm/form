function popup()
{
    alert("you have clicked me")
}
var btn=document.getElementById("mybtn");
btn.addEventListener("click",function(){
    btn.textContent="changed"
})
var id1 =document.getElementById("id1")
function changeColor()
{
id1.style.background="yellow"
}
function hide()
{
    id1.style.backgroundColor="white"
}