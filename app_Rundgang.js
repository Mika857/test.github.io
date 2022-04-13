//const option = document.querySelector(".option")
const opt1 = document.getElementById("opt1")
const opt2 = document.getElementById("opt2")



function opt1_Click(e){
    window.location = "Rundgang/Handy/output/Aula.html"
}

function opt2_Click(e){
    window.location = "Rundgang/output/Aula.html"
}



opt1.addEventListener("click", opt1_Click);
opt2.addEventListener("click", opt2_Click);
opt3.addEventListener("click", opt3_Click);



