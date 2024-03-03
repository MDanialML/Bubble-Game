var clutter = "";
let timer = 60;

function putNumber() {
    for(i = 1; i <= 70; i++)
{
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".bottom").innerHTML = clutter;
}

function runTimer() {
    let timeInt = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timeInt);
        }
        
    },1000); 
}

function updateHit() {
    
    setInterval(() => {
        let r_number = Math.floor(Math.random()*10);
        document.querySelector("#hit-number").textContent = r_number;
        
    }, 1000);
    
}


//functions calls
putNumber();
runTimer();
updateHit();