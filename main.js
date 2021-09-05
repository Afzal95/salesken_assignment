function can(m,id){
    var div = document.getElementById("main_div");
    var canvas = document.createElement("canvas");
    if(m>0){
        canvas.style.marginTop = `${m}px`;
    }
    var context = canvas.getContext("2d");
    // canvas.style.padding="10px";
    canvas.setAttribute("id",`id${id}`)
    canvas.style.width="10px";
    canvas.style.height="150px";
    // canvas.width=3;
    // canvas.height=200;
    context.fillStyle="grey";
    context.fillRect(0,0,100,150);
    div.appendChild(canvas);
}
 function bars(col){
    for (let i = 1; i <=100; i++) {
        let ran1 = Math.floor(Math.random()*100+90);
        let ran2 = Math.floor(Math.random()*100+110);
        let ran = Math.max(ran1,ran2);
        if(i%5==0 || i%19==0){
            can(ran,i);
        }else{
            can(ran,i)
        }
    }
 }
bars();

function canNew(m,id){
    const canvas = document.getElementById(`id${id}`);
    // var canvas = document.createElement("canvas");
    // if(m>0){
    //     canvas.style.marginTop = `${m}px`;
    // }
    let context = canvas.getContext("2d");
    // canvas.style.padding="10px";
    // canvas.setAttribute("id",`id${id}`);
    // canvas.style.width="10px";
    // canvas.style.height="150px";
    // canvas.width=3;
    // canvas.height=200;
    context.fillStyle="red";
    context.fill();
    // context.fillRect(0,0,100,150);
//    div.appendChild(canvas);
}

function play(){
    // for (let i = 1; i <= 100; i++) {
    //     document.getElementById(`id${i}`).style.color="red";
    //     console.log(document.getElementById(`id${i}`));
    // }
}
