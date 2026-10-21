    const savedLang = localStorage.getItem('userLang');
    const langSelector = document.getElementById('languages');

    if (savedLang) {
        langSelector.value = savedLang
    }

    langSelector.addEventListener("change", () => {
        localStorage.setItem("userLang", langSelector.value);   
        checkLanguage();                                        
    });
    
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
        else if(document.getElementById("languages").value == "jap"){
            changeToJapanese()
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
        else if(language == "jap"){
            changeToJapanese()
        }
    }
    
    // języki
    function changeToEnglish(){
        document.getElementById("settingsheadline").textContent = "Settings"
        document.getElementById("mainh1").textContent = "EPIC TO DO LIST"

        document.querySelector("input").placeholder = "New task description"

        document.getElementById("langheadline").textContent = "Language"
        document.getElementById("themeheadline").textContent = "Theme"
    }
    function changeToPolish(){
        document.getElementById("settingsheadline").textContent = "Ustawienia"
        document.getElementById("mainh1").textContent = "EPICKA LISTA RZECZY DO ZROBIENIA"

        document.querySelector("input").placeholder = "Opis nowego zadania"

        document.getElementById("langheadline").textContent = "Język"
        document.getElementById("themeheadline").textContent = "Motyw"
    }
    function changeToGerman(){
        document.getElementById("settingsheadline").textContent = "Einstellungen"
        document.getElementById("mainh1").textContent = "EPISCHE TO-DO-LISTE"

        document.querySelector("input").placeholder = "Beschreibung der neuen Aufgabe"

        document.getElementById("langheadline").textContent = "Sprache"
        document.getElementById("themeheadline").textContent = "Thema"
    }
        function changeToJapanese(){
        document.getElementById("settingsheadline").textContent = "設定"
        document.getElementById("mainh1").textContent = "エピックTO DO LIST"

        document.querySelector("input").placeholder = "新しいタスクを入力"

        document.getElementById("langheadline").textContent = "言語"
        document.getElementById("themeheadline").textContent = "テーマ"
    }
