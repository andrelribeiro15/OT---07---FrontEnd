const btn = document.querySelector("button");
const divMessage = document.querySelector(".msg-alerta");

const msg = " Preencha os campos primeiro !!!";

function ativar(msg){

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message)
}

btn.addEventListener("click", () => {
    ativar(msg)
});