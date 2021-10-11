//const option = document.querySelector(".option")
const opt1 = document.getElementById("opt1")

console.log(localStorage)

function opt1_Click(e){
    console.log("option 1")
    if(localStorage.getItem(0) == null)
    {
        localStorage.setItem(0, 1);
    }
    else{
        var number = parseInt(localStorage.getItem(0))
        number += 1
        localStorage.setItem(0, number)
    }
}

function opt2_Click(e){
    console.log("option 2")
    var numberStorage = 1
    if(localStorage.getItem(numberStorage) == null)
    {
        localStorage.setItem(numberStorage, 1);
    }
    else{
        var number = parseInt(localStorage.getItem(numberStorage))
        number += 1
        localStorage.setItem(numberStorage, number)
    }
}

function opt3_Click(e){
    console.log("option 3")
    var numberStorage = 2
    if(localStorage.getItem(numberStorage) == null)
    {
        localStorage.setItem(numberStorage, 1);
    }
    else{
        var number = parseInt(localStorage.getItem(numberStorage))
        number += numberStorage
        localStorage.setItem(numberStorage, number)
    }
}


opt1.addEventListener("click", opt1_Click);
opt2.addEventListener("click", opt2_Click);
opt3.addEventListener("click", opt3_Click);



