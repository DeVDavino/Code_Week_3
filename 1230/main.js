let button = document.createElement("button");
button.innerHTML = "New Image";
document.body.appendChild(button);

document.getElementById("js--figure--second").style.display="none";

button.onclick = function(){
    console.log("doe iets");
    document.getElementById("js--image--first").setAttribute("src","./img/work2.jpeg");
    document.getElementById("js--image--first").setAttribute("alt","/tweede afbeelding");
}
