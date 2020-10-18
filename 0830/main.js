function onDragStart(event){
    event.target.style.backgroundColor = "#1d2d50";
    event.dataTransfer.setData("text/plain", event.target.id);  
}

function onDragEnd(event){
    event.target.style.backgroundColor = "#e11d74";
}

function onDragOver(event){
    event.preventDefault();
    event = document.getElementsByClassName("container__character")[0].style.backgroundColor = "#206a5d";
}

function onDragLeave(event){
    event = document.getElementsByClassName("container__character")[0].style.backgroundColor = "#206a5d";
}

function onDrop(event){
   document.getElementById(event.dataTransfer.getData("text/plain")).style.display = "none";
   event.target.style.backgroundColor = "#252a34";

   let id = event.dataTransfer.getData("text/plain");
    if(id === "js--health"){
            document.getElementsByClassName("container__character__head")[0].style.backgroundColor = "#e94560";
            document.getElementsByClassName("container__character__body")[0].style.backgroundColor = "#e94560";
    }

    if(id === "js--mana"){
        document.getElementsByClassName("container__character__head")[0].style.backgroundColor = "#0f3460";
        document.getElementsByClassName("container__character__body")[0].style.backgroundColor = "#0f3460";
    }

    if(id === "js--power"){
    
    document.getElementsByClassName("container__character__body")[0].style.borderRadius = "0.5rem";
    }
    
    if(id === "js--head--armor"){
        document.getElementsByClassName("container__character__head")[0].style.borderRadius = "0.5rem";
    }

    if(id === "js--berries"){
        document.getElementsByTagName("body")[0].classList =+ "crazy";
    }
}