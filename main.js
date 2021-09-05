
var time =1;
var playFlag = false;

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
    context.fillRect(0,0,80,150);
    div.appendChild(canvas);
}

 function bars(col){
    for (let i = 1; i <=100; i++) {
        let ran1 = Math.floor(Math.random()*100+90);
        let ran2 = Math.floor(Math.random()*100+110);
        let ran = Math.max(ran1,ran2);
        random.push(ran);
        if(i%5==0 || i%19==0){
            can(ran,i,col);
        }else{
            can(ran,i,col)
        }
    }
 }
bars();

function update(m,id,color="grey"){

    canvas.setAttribute("id",`id${id}`);
    canvas.style.width="10px";
    canvas.style.height="150px";
    context.fillStyle=`${color}`;
    context.fillRect(0,0,80,150);
    div.appendChild(canvas);
}

var interval;
function play(){
    let aud = document.getElementById("audio");
//    aud.currentTime=20;
    console.log(aud.currentTime);
    console.log(aud.duration);

    if(interval==undefined){
        aud.play();
        document.getElementById("play").innerHTML=`<i class="fas fa-pause"></i>`
        interval=setInterval(()=>{
            time++;
            colorUpdate();
        },1000)
    }else{
        aud.pause();
        document.getElementById("play").innerHTML=`<i class="fas fa-play"></i>`        
        clearInterval(interval);
        interval=undefined;
    }

}

function colorUpdate(){
    var canvases = document.querySelectorAll("canvas");
    for (let i = 0; i < canvases.length; i++) {
        var ctx = canvases[i].getContext("2d");
        ctx.clearRect(0, 0, canvases[i].width, canvases[i].height);
        if(canvases[i].id<time){
            ctx.fillStyle="red";
            ctx.fillRect(0,0,80,150);
        }else{
            ctx.fillStyle="grey";
            ctx.fillRect(0,0,80,150);
        }
    }
}

document.querySelectorAll("canvas").forEach(el=>{
    el.addEventListener("click",updateBar);
});

function updateBar(e){
    var tgt = e.target.id;
    let aud = document.getElementById("audio");
    aud.currentTime=tgt;
    time=tgt;
}