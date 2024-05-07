// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let tasks = [];

// Todo: create a function to generate a unique task id
function generateTaskId() {
   // return random id for the task
}
const toggleFormBtn = document.getElementById("toggleFormBtn");
toggleFormBtn.addEventListener("click", function(){
    const modal = document.getElementsByClassName("modal");

    // Opens the modal
    $(modal).modal("show");
});

function saveToLocal() {
 

localStorage.setItem('tasks', JSON.stringify(tasks));
console.log("Task saved successfully!");
}

const saveButton = document.querySelector(".btn.btn-primary");

saveButton.addEventListener("click", handleAddTask);


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
   //step 1 look through the list of tasks and create a task card for each task 
   //step 2 make the cards draggable 
   // push the details from the object 
         //title = card-header
         //description = card-body
         //deadline = card-text 
         const cardHeader = document.getElementById("cardHeader")
         const cardTitle = document.getElementById("cardTitle")
         const cardText = document.getElementById("cardText")

         const cardLocalStorage = JSON.parse(localStorage.getItem("tasks"))
         console.log(cardLocalStorage[0].title)

         cardHeader.textContent = cardLocalStorage[0].title
         cardTitle.textContent = cardLocalStorage[0].description
         cardText.textContent = cardLocalStorage[0].deadline
         
      
        $( ".draggable" ).draggable();

         
         
         const cardContainer = document.getElementById("cardContainer");
         cardContainer.innerHTML = ""; // Clear existing cards
         tasks.forEach(task => {
             const card = document.createElement("div");
             card.classList.add("card");
             card.innerHTML = `
                 <div class="card-header">${task.title}</div>
                 <div class="card-body">${task.description}</div>
                 <div class="card-text">${task.deadline}</div>
             `;
             cardContainer.appendChild(card);
         });
}


 


// Todo: create a function to handle adding a new task
function handleAddTask(event){
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const deadline = document.getElementById("taskDeadline").value;

    const task  = {
        title: title,
        description: description,
        deadline: deadline,
        id: generateTaskId()

};
tasks.push(task);
   saveToLocal()

   renderTaskList()
    
}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
