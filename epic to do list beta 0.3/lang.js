    checkLanguage()
    document.getElementById("languages").addEventListener("change", ()=>{
        if(document.getElementById("languages").value == "eng"){
            changeToEnglish()
        }
        else if(document.getElementById("languages").value == "pol"){
            changeToPolish()
        }
        else if(document.getElementById("languages").value == "ger"){
            changeToGerman()
        }
    })
    function checkLanguage(){
        let language = document.getElementById("languages").value
        console.log(language)
        if(language == "eng"){
            changeToEnglish()
        }
        else if(language == "pol"){
            changeToPolish()
        }
        else if(language == "ger"){
            changeToGerman()
        }
    }
    
    // języki
    function changeToEnglish(){
        document.getElementById("tasksbtn").textContent = "Task list"
        document.getElementById("settingsbtn").textContent = "Settings"
        document.getElementById("mainh1").textContent = "EPIC TO DO LIST"

        document.querySelector("input").placeholder = "New task description"
        document.getElementsByClassName("j").textContent = "Add task"

        document.getElementById("settingsheadline").textContent = "Settings"
        document.getElementById("langheadline").textContent = "Language"
        document.getElementById("themeheadline").textContent = "Theme"
    }
    function changeToPolish(){
        document.getElementById("tasksbtn").textContent = "Lista zadań"
        document.getElementById("settingsbtn").textContent = "Ustawienia"
        document.getElementById("mainh1").textContent = "EPICKA LISTA RZECZY DO ZROBIENIA"

        document.querySelector("input").placeholder = "Opis nowego zadania"
        document.getElementsByClassName("j").textContent = "Dodaj zadanie"

        document.getElementById("settingsheadline").textContent = "Ustawienia"
        document.getElementById("langheadline").textContent = "Język"
        document.getElementById("themeheadline").textContent = "Motyw"
    }
    function changeToGerman(){
        document.getElementById("tasksbtn").textContent = "Aufgabenliste"
        document.getElementById("settingsbtn").textContent = "Einstellungen"
        document.getElementById("mainh1").textContent = "EPISCHE TO-DO-LISTE"

        document.querySelector("input").placeholder = "Beschreibung der neuen Aufgabe"
        document.getElementsByClassName("j").textContent = "Aufgabe hinzufügen"
        
        document.getElementById("settingsheadline").textContent = "Einstellungen"
        document.getElementById("langheadline").textContent = "Sprache"
        document.getElementById("themeheadline").textContent = "Thema"
    }
