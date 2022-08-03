/*
Lembrando que este projeto teve as vídeo aulas 
do canal do Youtuber Felipe Rocha (dicasparadevs) 
como importantísimas para o desenvolvimento desse projeto 



task = tarefa
handle = lidar com
refresh = atualizar
current = atual
content = conteudo
*/

const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector('.tasks-container');


//verificar se o campo tem algo digitado no input
const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    //se não tiver tarefa, retorna uma classe css "error"
    if (!inputIsValid){
        return inputElement.classList.add("error");
    }

    //Criando o bloco que será a tarefa digitada
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    //um parágrafo criado com o valor digitado do input "inputElement"
    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    //função para lidar com o click sobre a palavra digitada
    taskContent.addEventListener('click', () => handleClick(taskContent));

    //colocando o botão de classe = "far fa-trash-alt" do lado da tarefa digitada
    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash-can");

    //função para remover quando clicar no ícone da lixeira
    deleteItem.addEventListener('click', () => 
    handleDeleteClick(taskItemContainer, taskContent));

    //levando para a div os elementos da tarefa digitada e o ícone de delete
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    //A div "tasks-container"
    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";

    //atualizando o local storage
    updateLocalStorage();
};

//para quando clicar na palavra da tarefa, gerar o efeito linha sobre as letras
const handleClick = (taskContent) => {

    const tasks = tasksContainer.childNodes;

    //pega todos os filhos do tasksContainer (div "task-item")
    for (const task of tasks){
        // verifica se o parágrafo pego é o mesmo do "taskContent"
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);
        if (currentTaskIsBeingClicked){
            //se sim, coloca outra classe css, a completed (passa uma linha no meio das letras)
            task.firstChild.classList.toggle("completed");
        }
    }
    //atualizando o local storage
    updateLocalStorage();
};

//para quando clicar na palavra da tarefa, TIRAR o efeito linha sobre as letras
const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    //pega todos os filhos do tasksContainer (div "task-item")
    for (const task of tasks){
        // verifica se o parágrafo pego é o mesmo do "taskContent"
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);
        if (currentTaskIsBeingClicked){
            //se sim, retira a classe css, a completed (passa uma linha no meio das letras)
            taskItemContainer.remove();
        }
    }
    //atualizando o local storage
    updateLocalStorage();
};

const handleInputChange = () => {
    //Se tiver algo escrito no input, remove a classe css "error"
    const inputIsValid = validateInput();
    if (inputIsValid){
        return inputElement.classList.remove("error");
    }
};

//função que grava toda a modificação feita no Local Storage
const updateLocalStorage = () => {
    //pega todas as tarefas que estão no tasksContainer
    const tasks = tasksContainer.childNodes;

    //transforma em string de uma lista que terá todas as funções
    const localStorageTasks = [...tasks].map((task) => {
        const content = task.firstChild;
        //verificar se a tarefa está feita com a classe "completed" , se sim, armazena True na variável
        const isCompleted = content.classList.contains("completed");
        return {description:content.innerText, isCompleted};
    });
    //salvando em JSON no local storage
    localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
};

//função que pega do local storage e joga na tela
const refreshTasksUsingLocalStorage = () => {

    //pegando a lista JSON
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

    //criando dinamicamente as tarefas que estiverem armazenadas
    for (const task of tasksFromLocalStorage){

        //repetindo os processos, mas somente para os arquivos armazenados
        const taskItemContainer = document.createElement('div');
        taskItemContainer.classList.add('task-item');

        const taskContent = document.createElement('p');
        taskContent.innerText = task.description;

        if(task.isCompleted){
            taskContent.classList.add("completed");
        }

        taskContent.addEventListener('click', () => handleClick(taskContent));

            const deleteItem = document.createElement("i");
            deleteItem.classList.add("fa-solid");
            deleteItem.classList.add("fa-trash-can");

            deleteItem.addEventListener('click', () => 
            handleDeleteClick(taskItemContainer, taskContent)
        );

        taskItemContainer.appendChild(taskContent);
        taskItemContainer.appendChild(deleteItem);

        tasksContainer.appendChild(taskItemContainer);
    }
}

//chamando a função que possui itens salvos no local storage
refreshTasksUsingLocalStorage();

addTaskButton.addEventListener("click", () => handleAddTask());

//coloca a mudança no input (deletar a classe css "error")
inputElement.addEventListener("change", () => handleInputChange());