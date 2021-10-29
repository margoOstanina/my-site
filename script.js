var colorCricles = [];
colorCricles[0] =document.getElementById("red");
colorCricles[1] =document.getElementById("blue");
colorCricles[2] =document.getElementById("green");
colorCricles[3] =document.getElementById("yellow");
colorCricles[4] =document.getElementById("cyan");
colorCricles[5] =document.getElementById("magenta");
colorCricles[6] =document.getElementById("grey");
colorCricles[7] =document.getElementById("purple");
colorCricles[8] =document.getElementById("teal");
colorCricles[9] =document.getElementById("coral");
colorCricles[10] =document.getElementById("lighSeaGreen");
colorCricles[11] =document.getElementById("midnighBlue");

var list=document.getElementById("list");
list.addEventListener("click", pick);

var targetColor="red";
colorCricles[0].style.height="80px";
colorCricles[0].style.width="80px";

function pick(e){
    console.log(e.target.tegName);
    if (e.target.tagName=="LI"){
        if (e.target.id=="red"){
            targetColor="red"
        }
        else if (e.target.id=="blue"){
            targetColor="blue"
        }
        else if (e.target.id=="green"){
            targetColor="green"
        }
        else if (e.target.id=="yellow"){
            targetColor="yellow"
        }
        else if (e.target.id=="cyan"){
            targetColor="cyan"
        }
        else if (e.target.id=="magenta"){
            targetColor="magenta"
        }
        else if (e.target.id=="grey"){
            targetColor="grey"
        }
        else if (e.target.id=="purple"){
            targetColor="purple"
        }
        else if (e.target.id=="teal"){
            targetColor="teal"
        }
        else if (e.target.id=="coral"){
            targetColor="coral"
        }
        
        for (var i=0; i<=9; i++){
        colorCricles[i].style.height="50px";
        colorCricles[i].style.width="50px";
    }
    e.target.style.height="80px";
    e.target.style.width="80px";
    }
}

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function drawOnCanvas(e){
    if(e.which==1){
        canvasContext.strokeStyle=targetColor;
    }
}

function drawOnCanvas(e){
    if(e.which==1){
        canvasContext.fillStyle=targetColor;
        canvasContext.beginPath();
       // canvasContext.arc(e.offsetX, e.offsetY, 20,0, Math.PI*2);
       // canvasContext.rect(e.offsetX, e.offsetY, 20, 20);
        canvasContext.fillRect(e.offsetX, e.offsetY, 20,20);
        canvasContext.stroke();
        
        
        
    }
}

function getData() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}
  
