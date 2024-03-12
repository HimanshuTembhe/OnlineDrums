
for(let i = 0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //document.querySelectorAll(".drum")[i].style.color="black";
        //this.style.color="black";

        var btnValue = this.textContent;
        keyPress(btnValue);
        

         
    });
}

function keyPress(btnValue){
    switch(btnValue){
        case "w":
            var drumSound = new Audio("./sounds/tom-1.mp3");
            drumSound.play();
            break;

        case "a":
            var drumSound = new Audio("./sounds/tom-2.mp3");
            drumSound.play();
            break;

        case "s":
            var drumSound = new Audio("./sounds/kick-bass.mp3");
            drumSound.play();
            break;

    }
}

document.addEventListener("keydown",function(event){
    //console.log(event);
    keyPress(event.key);
})

