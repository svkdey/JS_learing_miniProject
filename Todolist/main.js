//get variables
var form = document.querySelector("#task-form");
var taskList=document.querySelector(".collection");
const btn = document.querySelector(".clear-tasks");
var filter=document.querySelector("#filter");
var taskInput=document.querySelector("#task"); 
loadEventListeners();
//load event listeners
function loadEventListeners(){
    form.addEventListener('submit',addTask);
    //dom reload event listener
    document.addEventListener('DOMContentLoaded',getTasks);
    taskList.addEventListener('click',removeTask);
    btn.addEventListener('click',clearTasks);
    filter.addEventListener('keyup',filterTask);

}
function getTasks(task){
       let tasks;
       if (localStorage.getItem('tasks') === null) {
           tasks = [];
       } else {
           tasks = JSON.parse(localStorage.getItem('tasks'));

       }
       tasks.forEach(function(task){
           const li = document.createElement('li');
           li.className = "collection-item";
           li.appendChild(document.createTextNode(task));

           //create the cross icon

           const link = document.createElement('a');
           link.className = 'delete-item secondary-content';
           link.innerHTML = '<i class="fas fa-trash-alt"></i>';
           li.appendChild(link);
           taskList.appendChild(li);
           

       })
}
function removeTask(e){
    console.log(e.target.parentElement);
    if (e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('are you sure??')){
            e.target.parentElement.parentElement.remove();

            removeTaskFromLS(e.target.parentElement.parentElement);
        }

        
    }

}

function removeTaskFromLS(taskItem){
     let tasks;
     if (localStorage.getItem('tasks') === null) {
         tasks = [];
     } else {
         tasks = JSON.parse(localStorage.getItem('tasks'));

     }
     console.log(tasks);
     tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
     });
     localStorage.setItem('tasks',JSON.stringify(tasks));

}
function addTask(e){
    if(taskInput.value===''){
        console.log("add task in list");
    }
//CREATE the li element

const li=document.createElement('li');
li.className="collection-item";
li.appendChild(document.createTextNode(taskInput.value));

//create the cross icon

const link=document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML = '<i class="fas fa-trash-alt"></i>';
li.appendChild(link);

//append li to Ui
taskList.appendChild(li);
//store in LS

storeTaskInLS(taskInput.value);

// clear input
taskInput.value='';



e.preventDefault();
}


 function clearTasks(e){
     //   one method of doing it
     // taskList.innerHTML='';  
    //2nd methid
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLS();

 }
 function clearTasksFromLS(){
     localStorage.clear();
 }

function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent.toLowerCase();
        if (item.indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}

function storeTaskInLS(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}