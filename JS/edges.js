const checkIfRound = document.getElementById("round")
const allOpts = document.querySelectorAll("option")

function roundedCheck(){
    let ifChecked = checkIfRound.checked
    console.log(checkIfRound.checked)
    if(ifChecked == true){
        document.getElementById("taskinput").classList.add("inp-round")
        document.getElementById("tasks").classList.add("tasks-round")
        document.getElementById("settingsbtn").classList.add("button-round")
        document.getElementById("settings").classList.add("settings-round")
        allOpts.forEach((a)=>{
            a.classList.add("opt-round")
        })
    }
    else{
        document.getElementById("taskinput").classList.remove("inp-round")
        document.getElementById("tasks").classList.remove("tasks-round")
        document.getElementById("settingsbtn").classList.remove("button-round")
        document.getElementById("settings").classList.remove("settings-round")
        allOpts.forEach((a)=>{
            a.classList.remove("opt-round")
        })
    }
}