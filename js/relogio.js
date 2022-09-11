let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');


let relogio = setInterval(function Time(){
    //data atual
    let dateToday = new Date();


    //pegar hora. data de hj
    let hr = dateToday.getHours();
    //pegar min. data de hj
    let min = dateToday.getMinutes();
    //pegar s. data de hj
    let s = dateToday.getSeconds();

    
    //por zero antes dos numeros
    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min

    if(s < 10) s = '0' + s;



    //por os valores no document
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;


     
})