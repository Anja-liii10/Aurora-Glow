const cursor = document.getElementById("cursor");
const select = document.getElementById("cursorSelect");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate(){

    currentX += (mouseX-currentX)*0.15;
    currentY += (mouseY-currentY)*0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();


const spark = document.createElement("div");
spark.classList.add("spark");
select.addEventListener("change",()=>{

    let color = select.value;

    // Change Cursor Color
    cursor.style.background = color;

    cursor.style.boxShadow =
    `0 0 15px ${color},
     0 0 30px ${color},
     0 0 60px ${color}`;

    // Change Background Theme
    if(color === "yellow"){

        document.body.style.background =
        "linear-gradient(120deg, #F8F75B 0%, #D7F96A 10%, #88D77A 25%,  #2ED3A2 45%,  #0E8FA8 65%,  #0B4F82 82%, #051B4D 100%)";

    }

    else if(color === "cyan"){
        // document.body.style.background =
        // "linear-gradient(135deg, #00142F 0%, #154559 15%, #0022FF 35%, #006FFC 55%, #00BBF9 75%, #00F5D4 92%, #1E1E1E 100%)";
       
        document.body.style.background =
        "linear-gradient(140deg, #00142F 0%, #0022FF 18%, #006FFC 40%, #00BBF9 65%, #00F5D4 88%, #1E1E1E 100%)";

    }

    else if(color === "pink"){

        document.body.style.background =
        "linear-gradient(135deg, #110A1C 0%, #2C1665 20%, #6A3D8F 40%, #9C748C 62%, #CCC0CB 82%, #A66FB6 100%)";

    }

    else if(color === "green"){

        document.body.style.background =
       "linear-gradient(135deg, #3B514C 0%, #4C733C 20%, #308F3D 45%, #B0D1BC 70%, #6E7E79 88%, #3B514C 100%)"; 
    }

});