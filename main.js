
//  declaring interval variable and initialising time value

var interval;
var time =1;

// this function runs as soon as page loads, and this runs func can that makes audio bars
function bars(col){
    for (let i = 1; i <=100; i++) {
        let ran1 = Math.floor(Math.random()*100+90);
        let ran2 = Math.floor(Math.random()*100+110);
        let ran = Math.max(ran1,ran2);
        if(i%5==0 || i%19==0){
            can(ran,i,col);
        }else{
            can(ran,i,col)
        }
    }
 }
bars(); 

//  This function runs and creates audio bars

function can(m,id,color="grey"){

    var div = document.getElementById("main_div");
    var canvas = document.createElement("canvas");
    if(m>0){
        canvas.style.marginTop = `${m}px`;
    }
    var context = canvas.getContext("2d");
    canvas.setAttribute("id",`${id}`);
    canvas.style.width="10px";
    canvas.style.height="150px";
    context.fillStyle=`${color}`;
    context.fillRect(0,0,120,150);
    div.appendChild(canvas);
}
// function for playing and pausing audio player
function play(){
    let aud = document.getElementById("audio");

    if(interval==undefined){
        aud.play();
        document.getElementById("play").innerHTML=`<i class="fas fa-pause fa-2x"></i>`
        interval=setInterval(()=>{
            time++;
            if(time>100){
                clearInterval(interval);
                aud.pause();
                document.getElementById("play").innerHTML=`<i class="fas fa-play fa-2x"></i>`        
            }
            colorUpdate();
        },1000)
    }else{
        aud.pause();
        document.getElementById("play").innerHTML=`<i class="fas fa-play fa-2x"></i>`        
        clearInterval(interval);
        interval=undefined;
    }

}

// function for changing colors of audio bars
function colorUpdate(){
    var canvases = document.querySelectorAll("canvas");
    for (let i = 0; i < canvases.length; i++) {
        var ctx = canvases[i].getContext("2d");
        ctx.clearRect(0, 0, canvases[i].width, canvases[i].height);
        if(canvases[i].id<time){
            ctx.fillStyle="magenta";
            ctx.fillRect(0,0,80,150);
        }else{
            ctx.fillStyle="grey";
            ctx.fillRect(0,0,80,150);
        }
    }
}

// adding event listener "click" to every bar ie- every canvas
document.querySelectorAll("canvas").forEach(el=>{
    el.addEventListener("click",updateBar);
});

// this function triggers when any bar is clicked 
function updateBar(e){
    var tgt = e.target.id;
    let aud = document.getElementById("audio");
    aud.currentTime=tgt;
    time=tgt;
    if(aud.currentTime>tgt){
        aud.play();
    }
}

// creating tags 