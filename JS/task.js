    const taskField = document.querySelector("input");
    const taskList = document.querySelector("#tasks ul");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks(){
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const newTask = document.createElement("li");
            newTask.textContent = task;

            newTask.addEventListener("click", () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            taskList.append(newTask);
        });
    }

    function saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask(){
        const taskText = taskField.value.trim();

        if(taskText !== ""){
            tasks.push(taskText);

            saveTasks();
            renderTasks();

            taskField.value = "";
        } 
    }

    taskField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        addTask();
        }
    });

    renderTasks();
