'use strict'

const arr=["HTML","JavaScript","CSS"];

function copySorted(){
    const arr2=arr.slice();
    // const arr2=[...arr];
    //const arr2=[array.from(arr)];

    arr2.sort();
    alert(arr2);
}

copySorted();