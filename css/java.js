function acepta(){
            n2();
            n1();
        }
function n1(){


}

function n2(){
    document.location.href = "Declaracion2.html";

}

function noacepta(){
    mueveElBoton();
    sonidoboton();
}

function mueveElBoton(){
            width = window.innerWidth;
            height = window.innerHeight;

            newWidth = (Math.random() * width);
            newHeight = (Math.random() * height);

            document.getElementById('btnNo').style.position = "absolute";
            document.getElementById('btnNo').style.left = newWidth + "px";
            document.getElementById('btnNo').style.top = newHeight + "px";
            

        }
function sonidoboton(){
    let boton = document.querySelector(".reproductor2")
let audioEtiqueta = document.querySelector(".audio2")
    boton.addEventListener("mouseover", () => {
    audioEtiqueta.play()
    })
}
