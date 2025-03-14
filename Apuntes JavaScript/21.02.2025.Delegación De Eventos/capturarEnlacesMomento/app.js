'use strict'
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('contents').addEventListener('click',(evento)=>{
     
      console.dir(evento.target.closest('a').nodeName);//El closest(); busca desde donde hayas hecho click hasta los nodos de arriba padre hasta encontrar referencias indicadas en nuestra caso la a , busca la mas cercana
        if(evento.target.closest('a').nodeName!='A'  ){
            return;
        }

      
        
       let href=evento.target.closest('a').getAttribute('href');//Obten del tag a mas cercano su href
       const minipropm=confirm(`Quieres irte a ${href}`);//creamso una variable en el que pasaremos el href del boton a que hay clickado
      
       if(minipropm===false ){//comprueba si su valor es falso o no , ya que el confirm tiene como opcion true o false
          evento.preventDefault();//no ejecute por defecto la accion
       }else{
        return true;
       }
      
        
    })
});