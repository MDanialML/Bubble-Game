var clutter = "";
let timer = 5;
let raise_num = 0;
let hitNumber;

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
            document.querySelector(".bottom").innerHTML = `<h1>Game Over<\h1>`;
        }
        
    },1000); 
}

function updateHit() {
        hitNumber = Math.floor(Math.random()*10);
        document.querySelector("#hit-number").textContent = hitNumber;
    
}

function upDateScore() {
    raise_num += 10;
    document.querySelector("#score").textContent = raise_num;
}

document.querySelector(".bottom").addEventListener("click",(detail)=>{
    let clicked_number = Number(detail.target.textContent);
    if(clicked_number === hitNumber)
    {
        upDateScore();
        putNumber();
        updateHit();
    }
});

//functions calls
putNumber();
runTimer();
updateHit();
