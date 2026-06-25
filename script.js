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

        document.body.style.background =
        "linear-gradient(135deg,#0f172a,#1e293b,#111827)";

    }

    else if(color === "pink"){

        document.body.style.background =
        "linear-gradient(135deg,#2e1065,#4c1d95,#1e1b4b)";

    }

    else if(color === "green"){

        document.body.style.background =
        "linear-gradient(135deg,#c7d2fe,#3b82f6,#1e3a8a)";

    }

});