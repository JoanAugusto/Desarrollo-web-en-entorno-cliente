'use strict'
//Key constntae del localStorage 
const KEY_LOCAL="tasksList";
document.addEventListener('DOMContentLoaded',principal);

//Key constante de la key de Completed
const KEY_COMPLETED='tasksListCompleted';

    function principal(){
        //add a new Task from the form

        const $form=document.getElementById('addTasks');
        $form.addEventListener('submit',addTasks);
        //Obtenemos el id del div arriba tambien para inyectar los datos
        const $ContentDivtasks=document.getElementById('tasks');
        //Añadimos las tareas del LocalStorage en el DOM
        const taskss=JSON.parse(localStorage.getItem(KEY_LOCAL));//volvemos de JSON a Array de Objetos
        const taskssCompleted=JSON.parse(localStorage.getItem(KEY_COMPLETED));//volvemos de JSON a Array de Objetos
        //Evento para eliminar un tarea
         $ContentDivtasks.addEventListener('click',deleteTask);

        //Evebtoi para pasarlo al a la lista de completado
       
        $ContentDivtasks.addEventListener('click',completedTask);

        //Evento para representar los datos guardados en Completed
        //capturamos el div de completado
       
        const $ContentDivtasksCompleted=document.getElementById('tasks-completed');
  
        $ContentDivtasksCompleted.addEventListener('click',AddTasksCompleted);

        
        let lists=
           taskss.map(t=>
            `
                <li class="titleDescription" data-id="${t.id}"><input type="checkbox" id="check">${t.description}.<p class="styleDate"> ${t.deadline}</p>
                <button type="delete" id="delete">Eliminar</button></li>

            `);
            const template=`<ul> ${lists}</ul>`;
            $ContentDivtasks.innerHTML=template;

            let listsCompleted=
           taskssCompleted.map(tc=>
            `
                <li class="titleDescription" data-id="${tc.id}">${tc.description}.<p class="styleDate"> ${tc.deadline}</p>
               

            `);
            const templates=`<ul> ${listsCompleted}</ul>`;
            $ContentDivtasksCompleted.innerHTML=templates;
    }
      
        function addTasks(evento){
            evento.preventDefault();//Al hacer clic en el botón "Enviar", evitar que se envíe un formulario
                                    // Al hacer clic en un enlace, evitar que el enlace siga la URL
           
            
            //Array de objetos para alamacenar las listass
            // const tasksList=[];
            // localStorage.setItem('tasksList', JSON.stringify(tasksList));

            //we create to a new Array of Objects for an task.
            
            const Task={
                id:String(Date.now()),
                description:evento.target.task.value,
                deadline:evento.target.date.value,
                completed:false,
                completionDate:null
            };

            
            
            //add task on Local Storage
            const taskss=JSON.parse(localStorage.getItem(KEY_LOCAL));//volvemos de JSON a Array de Objetos
            taskss.push(Task);// desde este punto imaginariamnete esto esta en nustro codigo pero no en local por lo que debemos de impelkmentarlo
            localStorage.setItem(KEY_LOCAL,JSON.stringify(taskss));//Volvemos a pasar El array en JSON pero oush del array de objetos taskss
            //add task on DOM 
            const $taskDiv = document.getElementById('tasks');
            const lists=
           
            `
                <li class="titleDescription" data-id="${Task.id}"><input type="checkbox" id="check">${Task.description} .<p class="styleDate"> ${Task.deadline}</p>
                <button type="delete" id="delete">Eliminar</button></li>

            `;
            const template=`<ul> ${lists}</ul>`;
            $taskDiv.innerHTML+=template;//Actualizamos constantemente las listas 

            
            
        }

        function deleteTask(evento){
           
            // salida prematura si el target no es un botón.
                if(evento.target.tagName!=='BUTTON') return;
                if(evento.target.textContent !=='Eliminar ') return;
            //Evento.target.parentElement.firstElement es la li--> Esto esta mal lo que hara es ir eliminado nuestro tags dentro del padre , primero los hijos y despues los padres
            //lo corrscto es esto evento.target.parentElement es la li
            //dataset.id  hace referencia el atributo data-id es mas el id de los li.
            //esto es para el local storage
            
            deleteTaskofLocalStorage(evento.target.parentElement.dataset.id);

            //eliminamos la lista del DOM
            evento.target.parentElement.remove();//buscamos siempre l referencia de lo que queramos eliminar con console.dir, simepre
        }
        // //Segunda parte del eliminar

        function deleteTaskofLocalStorage(idTask){
            //Obtenemos todo las listas
            const getAllTasksOfLocal=JSON.parse(localStorage.getItem(KEY_LOCAL));

            //hacemos limpieza en el nuevo array pero sin esa tarea
            const filterTasks=getAllTasksOfLocal.filter(c=> c.id!==idTask);

            //Actualizamos enviandolo de nuevo al Navegador

            localStorage.setItem(KEY_LOCAL,JSON.stringify(filterTasks));
        }

        function completedTask(evento){
            //Creamos un nuevo array de objetos 
            // const tasksListCompleted=[];
            //  localStorage.setItem('tasksListCompleted', JSON.stringify(tasksListCompleted));

            console.dir(evento.target.checked);
            //console.dir(evento.target.parentElement.dataset.id);
            //obtenemos la id del input seleccionado
            const $idListInput=evento.target.parentElement.dataset.id;
            //debemos de guardar el objeto junto con la id
            const getListsofLocal=JSON.parse(localStorage.getItem(KEY_LOCAL));//tipo objeto
           
            for (let value of getListsofLocal){
              if(Number(value.id)==Number($idListInput) && evento.target.checked==true){
          
                const saveTaskId=value;
                console.log(saveTaskId);
                const getAllTasksCompletedOfLocal=JSON.parse(localStorage.getItem(KEY_COMPLETED));
                getAllTasksCompletedOfLocal.push(saveTaskId);
                localStorage.setItem(KEY_COMPLETED,JSON.stringify(getAllTasksCompletedOfLocal));
                
              
              
              }
              
            }
            deleteTaskCompletedofLocalStorage($idListInput);
            evento.target.parentElement.remove();//buscamos siempre l referencia de lo que queramos eliminar con console.dir, siempre debemos borrar la lista que s el padre del check
        }
        //segunda parte del completar
        function deleteTaskCompletedofLocalStorage(idTaskCompleted){
             //Obtenemos todo las listas
             const getAllTasksCompletedOfLocal=JSON.parse(localStorage.getItem(KEY_LOCAL));

             //hacemos limpieza en el nuevo array pero sin esa tarea
             const filterTasks=getAllTasksCompletedOfLocal.filter(c=> c.id!==idTaskCompleted);
 
             //Actualizamos enviandolo de nuevo al Navegador
 
             localStorage.setItem(KEY_LOCAL,JSON.stringify(filterTasks));
        }
        
      //Part of the add tasks that have been completed

        function AddTasksCompleted(){
           
            const tasksCompleted=JSON.parse(localStorage.getItem(KEY_COMPLETED));//volvemos de JSON a Array de Objetos
            alert(template);
            //add task on DOM 
            const $taskDivCompleted = document.getElementById('tasks-completed');
            const listsCompleted=
           
            `
                <li class="titleDescription" data-id="${tasksCompleted.id}">${tasksCompleted.description} .<p class="styleDate"> ${tasksCompleted.deadline}</p>
                

            `;
            const template=listsCompleted;
           
            $taskDivCompleted.innerHTML+=template;//Actualizamos constantemente las listas 

        }

        /*
            1º Cosa a valorar , debemos pensar que no es lo mismo el primer document que hicimos que eso lo que hace es manipular todo antes que todo los eventos que creamos depues de la funcion creado primer
            2ºLas cosas que hagamos en las funciones consiguinetes debe estar en la primer funcion 
        */