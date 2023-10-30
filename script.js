const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generate8tn = container.querySelector(".form button"),
qrImg = container.querySelector(".qr-code img");


generate8tn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; //if input is empty then return
    generate8tn.innerHTML = "Generating Qr Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generate8tn.innerHTML = "Generate Qr Code";
    });
   
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        container.classList.remove("active");
    }
})