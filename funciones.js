var imagenes=["star1.jpg","star2.jpg","star3.jpg", "star4.jpg",
"star5.jpg"];

var a=0;
var b;

function siguiente(){
    if(a==8){
        a=0
    }
    document.getElementById("animaciones").src=imagenes[a];
    a=a+1;
}

function mover(){
    b=setInterval(function(){
        if(a==8){
            a=0;
        }
        document.getElementById("animaciones").src=imagenes[a];
        a=a+1;
        c=document.getElementById("move");
        c.disabled=true;
    },100)
}

function parar(){
    clearInterval(b)
        c=document.getElementById("move");
        c.disabled=false;
}