'use strict'

const arr=["HTML","JavaScript","CSS"];

function copySorted(){
    const arr2=arr.slice(0);

    arr2.sort();
    alert(arr2);
}

copySorted();