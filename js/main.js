let tasks = [
    {
    image: "img/task-1.jpg",
    taskName: "Develop a mobile application", 
    description: "Design and develop a mobile application for iOS or Android.",
    priority: 0,
    deadline: "11.04.2023"
    },
     {
    image: "img/task-2.jpg",
    taskName: "Write a report", 
    description: "Prepare a comprehensive report summarizing the findings of a research project.",
    priority: 0,
    deadline: "21.08.2023"

    },
     {
    image: "img/task-3.jpg",
    taskName: "Develop a website", 
    description: "Build a user-friendly website with a visually appealing layout and responsive design.",
    priority: 0,
    deadline: "12.09.2023"

    },
     {
    image: "img/task-4.jpg",
    taskName: "Social media management", 
    description: "Create and execute a social media strategy for our company.",
    priority: 0,
    deadline: "23.06.2023"

    },
     {
    image: "img/task-5.jpg",
    taskName: "Develop a training program", 
    description: "Design and deliver a comprehensive training program to equip employees.",
    priority: 0,
    deadline: "18.05.2023"

    },
     {
    image: "img/task-6.jpg",
    taskName: "Conduct customer surveys", 
    description: "Design and administer surveys to collect feedback from customers.",
    priority: 0,
    deadline: "19.05.2023"
}
];


  
  for(let task of tasks){
      document.getElementById("tasks").innerHTML += `
      <div class="card shadow ">
      <div class="top-card m-3 d-flex justify-content-between">
      <button class="btn btn-info">Tasks</button>
      <div class="right-side d-flex">
      <i class="bi bi-bookmark"></i> 
      <i class="bi bi-three-dots-vertical"></i>
      </div>    
      </div>
      <div class="m-3">
      <img src="${task.image}" class="card-img-top" alt="image of task">
      </div>
      <div class="card-body text-center">
      <h5 class="card-title">${task.taskName}</h5>
      <p class="card-text">${task.description}</p>
            <hr>
            <div class="mid-part-1 d-flex text-start">
            <i class="bi bi-exclamation-triangle"></i>
            <p class="mx-1">Priority level: </p>
            <a class="btn btn-success priorityBtn">${task.priority}</a>
            </div>
            <div class="mid-part-2 d-flex text-start mt-1">
            <i class="bi bi-calendar-week-fill"></i>
            <p class="mx-1">Deadline: ${task.deadline} </p>
            </div>
            <hr>
            <div class="bottom-part d-flex justify-content-end">
            <button type="button" class="btn btn-danger mx-3"><i class="bi bi-trash mx-1"></i>Delete</button>
            <button type="button" class="btn btn-success px-3"><i class="bi bi-check-circle mx-1"></i>Done</button>
            
            </div>
            </div>
            </div>`
       }
             

let btns = document.getElementsByClassName("priorityBtn");

for (let i in btns) {
    btns[i].addEventListener("click", function(){
    if(tasks[i].priority != 5){
    tasks[i].priority++;
    }else {
        tasks[i].priority = 0;
    }
    btns[i].innerHTML = tasks[i].priority;
    btns[i].classList.remove("btn-success", "btn-warning", "btn-danger");
    
                      
    if (tasks[i].priority === 0 || tasks[i].priority === 1) {
        btns[i].classList.add("btn-success");
    } else if (tasks[i].priority === 2 || tasks[i].priority === 3) {
    btns[i].classList.add("btn-warning");
    } else if (tasks[i].priority === 4 || tasks[i].priority === 5) {
    btns[i].classList.add("btn-danger");
    };
    });
}

