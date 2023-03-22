const ligar = document.getElementById("ligar");
const lampada = document.getElementById("lampada-default");

function lampada_quebrada() {
  return lampada.src.indexOf("quebrada") > 1;
}

function Ligar() {
  if (!lampada_quebrada()) {
    lampada.src = "./img/ligada.png";
  }
}

function Desligar() {
  if (!lampada_quebrada()) {
    lampada.src = "./img/desligada.png";
  }
}

function Quebrada() {
  lampada.src = "./img/quebrada.png";
}

function ligar_desligar (){
    if(ligar.textContent === "Ligar"){
        Ligar()
        ligar.textContent = "Desligar"
    }else{
        Desligar()
        ligar.textContent = "Ligar"
    }
}

ligar.addEventListener("click", Ligar);
lampada.addEventListener("mouseover", Ligar);
lampada.addEventListener("mouseleave", Desligar);
lampada.addEventListener("click", Quebrada);
lampada.addEventListener("click", lampada_quebrada);
ligar.addEventListener('click', ligar_desligar)
