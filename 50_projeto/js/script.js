function addTask() {
    const taskTitle = document.getElementById("task-title").value;

   if(taskTitle) {
    
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);
 
    newTask.querySelector(".task-title").textContent = taskTitle;
 
    newTask.classList.remove("template");
    newTask.classList.remove("hide");
 
    const list = document.getElementById("task-list");
    list.appendChild(newTask);

    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
        removeTask(this);
    });

    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
        doneTask(this);
    })

    document.getElementById("task-title").value = "";


   } 

        function removeTask(task) {
           task.parentNode.remove(true);
        }

        function doneTask(task) {
            const donedTask = task.parentNode;
            donedTask.classList.toggle("done");
        }

}

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    addTask();
})