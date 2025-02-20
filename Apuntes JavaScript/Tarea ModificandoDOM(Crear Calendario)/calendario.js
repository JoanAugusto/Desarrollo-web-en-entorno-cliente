'use strict'

function createCalendar(year,month){

    let newDate=new Date(String(year),String(month),0);


    console.log(newDate.getDate());
}

createCalendar(2012,9);