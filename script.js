let inputTinggi=document.getElementById("tinggi")
let inputBerat=document.getElementById("berat")
let tampilHasil=document.getElementById("result")
let btnHitung=document.getElementById("hitungBMI")
let pStatus=document.getElementById("status")

function hitungBMI(){
    let tinggi=inputTinggi.value/100;
    let berat=inputBerat.value;
    let hasil=(berat/(tinggi*tinggi)).toFixed(2)
    return hasil
}

btnHitung.addEventListener("click",function(){
    let output=hitungBMI()
    let status=""
    if(output<18.5){
        status="Kekurangan berat badan"
    }else if(output>=18.5 && output<=24.9){
        status="Normal (ideal)"
    }else if(output>=25.0 && output<=29.9){
        status="Kelebihan berat badan"
    }else if(output>=3.0){
        status="Kegemukan"
    }else{
        status="Masukkan nilai dengan benar"
    }
    tampilHasil.textContent=output
    pStatus.textContent=status
})