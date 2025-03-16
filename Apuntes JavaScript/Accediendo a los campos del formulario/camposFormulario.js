'use strict'
document.addEventListener('DOMContentLoaded', () => {
    
    document.body.addEventListener('click', capturaFormulario);
    const $divalo = document.getElementById('valores');  // Mantenemos la referencia al elemento

    function capturaFormulario(evento) {
       

        if (evento.target.type !== 'submit' && evento.target.type !== 'button') return;

        let form = document.forms[0];

        // Obteniendo valores del formulario
        let name = form.elements.nombre.value;
        let contrasena = form.elements.contrasena.value;
        let correo = form.elements.correo.value;
        let telefono = form.elements.telefono.value;
        let edad = form.elements.edad.value;
        let url = form.elements.url.value;
        let busqueda = form.elements.busqueda.value;
        let color = form.elements.color.value;
        let textarea = form.elements.textarea.value;


        // Capturando la capitales de noruega
        let noruegaOption=form.elements.p1.value;
        let francesaOption=form.elements.p2.value;
        //Capturando los checkbox
        let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        let fullCheck='';
        checkboxes.forEach(checkbox => {
          let nameCheckbox=checkbox.name;
            let checked=checkbox.value;
            fullCheck += `<strong>Checkbox:</strong> Value:${nameCheckbox} y Value:${checked}`;
        });

        // Tiempo 
        let hora=form.elements.hora.value;
        let fecha=form.elements.fecha.value;
        let FechaHora=form.elements.fechaHora.value;
        let Semana=form.elements.semana.value;
        let Mes=form.elements.mes.value;

        // datalist browsers
        const $dataList=document.getElementById('browsers');
        let getOptions= Array.from($dataList.options)
            .filter(option=> option.selected)
            .map(option=>  option.value);
        let optionSelectedBrowsers=String(getOptions);
        // Selección colores
        let selectColor = document.querySelectorAll('select[name="Seleccion"]');
        let fullColor='';
        selectColor.forEach(color => {
          let colorName=color.name;
            let checkColor=color.value;
            fullColor += `<strong>Selección:</strong> Value:${checkColor} y Nombre:${colorName}`;
        });

        //Select multiple drawfs
        const $selectMultiple=document.getElementById('drawfs');
        let selectedMultiple=Array.from($selectMultiple.options)
                            .filter(option=>option.selected)
                            .map(option=>option.value);
        let valuesSelected=String(selectedMultiple);

        //rangos
        let rango1=form.elements.rango1.value;
        let rango2=form.elements.rango2.value;
        //archivos
        let archivo=form.elements.archivo.value;
        // Mostrar todos los valores en el div sin reemplazarlo completamente
        $divalo.innerHTML = `
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Contraseña:</strong> ${contrasena}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <p><strong>URL:</strong> ${url}</p>
            <p><strong>Búsqueda:</strong> ${busqueda}</p>
            <p><strong>Color:</strong> <span style="background-color:${color}; padding:2px 5px;">${color}</span></p>
            <p><strong>Texto:</strong> ${textarea}</p>
            <p><strong>Capital de Noruega:</strong> ${noruegaOption}</p>
            <p><strong>Fecha de la Revolución Francesa:</strong> ${francesaOption}</p>
           <p>${fullCheck}</p>
           <p><strong>Hora:</strong> ${hora}</p>
           <p><strong>Fecha:</strong> ${fecha}</p>
           <p><strong>Fecha y Hora:</strong> ${FechaHora}</p>
           <p><strong>Semana:</strong> ${Semana}</p>
           <p><strong>Mes:</strong> ${Mes}</p>
           <p>${optionSelectedBrowsers}</p>
           <p>${fullColor}</p>
           <p> <strong>Select Multiple: </strong>${selectedMultiple}</p>
           <p><strong>Rango 1: </strong>${rango1}</p>
           <p><strong>Rango 2: </strong>${rango2}</p>
           <p><strong>Archivo: </strong>${archivo}</p>
        `;
    }
});
