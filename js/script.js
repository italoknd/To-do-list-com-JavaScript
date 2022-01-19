//evento add task
let addTaskButton = document.getElementById('add-button');
  
addTaskButton.addEventListener('click', function(e){
  e.preventDefault();
  
  addTask();
});

//função add task
function addTask(){
  let taskTitle = document.getElementById('task-title').value;
  
  if(taskTitle == ''){
    window.alert('Oops, algo deu errado... Tarefas em branco não podem ser adicionadas!');
  }else{
    let template = document.querySelector('.template');
    let newTask = template.cloneNode(true); //cloneNode clona o HTML
    
    //add task
    newTask.querySelector('.task-title').textContent = taskTitle;

    //remover classes desnecessárias
    newTask.classList.remove('template');
    newTask.classList.remove('hide');

    //add task na lista
    let lista = document.getElementById('task-list');
    lista.appendChild(newTask);

    //limpar input
    document.getElementById('task-title').value = '';

    //add evento remover task
    let removeButton = newTask.querySelector('.remove-button').addEventListener('click', function(){
      removeTask(this);
    })

    //evento concluir task
    let checkButton = newTask.querySelector('.done-button').addEventListener('click', function(){
      finishTask(this);
    })
  }
}

//remove task
function removeTask(task){
  let decision = window.prompt('Deseja remover a tarefa?');

  if(decision.toUpperCase() === "SIM"){
    task.parentNode.remove(true);
    alert('Tarefa removida com sucesso!');
  }else if((decision.toUpperCase() === "NAO") || (decision.toUpperCase() === "NÃO")){
    alert('Desfazendo ação...');
  }else{
    alert('Desculpa, não consegui te entender... :/');
  }
}

//finish task
function finishTask(task){
  let taskCompleted = task.parentNode;

  taskCompleted.classList.toggle('done');//toggle trabalha como um switch
}