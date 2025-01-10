'use strict'
//Key constntae del localStorage 
const KEY_LOCAL="tasksList";
document.addEventListener('DOMContentLoaded',principal);

    function principal(){
        //add a new Task from the form

        const $form=document.getElementById('addTasks');
        $form.addEventListener('submit',addTasks);
        //Obtenemos el id del div arriba tambien para inyectar los datos
        const $ContentDivtasks=document.getElementById('tasks');
        //Añadimos las tareas del LocalStorage en el DOM
        const taskss=JSON.parse(localStorage.getItem(KEY_LOCAL));//volvemos de JSON a Array de Objetos
        
        let lists=
           taskss.map(t=>
            `
                <li class="titleDescription" data-id="${t.id}"><input type="checkbox" id="check">${t.description}.<p class="styleDate"> ${t.deadline}</p>
                <button type="delete" id="delete">Eliminar</button></li>

            `);
            const template=`<ul> ${lists}</ul>`;
            $ContentDivtasks.innerHTML=template;
    }
      
        function addTasks(evento){
            evento.preventDefault();//Al hacer clic en el botón "Enviar", evitar que se envíe un formulario
                                    // Al hacer clic en un enlace, evitar que el enlace siga la URL
            
            //Array de objetos para alamacenar las listass
            // const tasksList=[];
            // localStorage.setItem('tasksList', JSON.stringify(tasksList));

            //we create to a new Array of Objects for an task.
            console.dir(evento);
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
        
        // <input type="date" id="date">
        /*
            1º Cosa a valorar , debemos pensar que no es lo mismo el primer document que hicimos que eso lo que hace es manipular todo antes que todo los eventos que creamos depues de la funcion creado primer
            2ºLas cosas que hagamos en las funciones consiguinetes debe estar en la primer funcion 
        */