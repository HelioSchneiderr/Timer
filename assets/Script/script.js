function seg(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString(`pt-br`, {
        hour12: false,
        timeZone: 'UTC'
    });
};

const tempo = document.querySelector('.tempo')
const pausar = document.querySelector(`.pausar`)
const iniciar = document.querySelector(`.iniciar`)
const reiniciar = document.querySelector(`.reiniciar`)
tempo.innerHTML = '00:00:00'
let timer;
let segundos = 0;

function iniciarTimer(){
    timer = setInterval(function(){
    segundos++;
    tempo.innerHTML = seg(segundos);
},1000)
}

iniciar.addEventListener(`click`,function(event){
    clearTimeout(timer);
    tempo.style.color = `Black`
    iniciarTimer();
});

pausar.addEventListener(`click`, function(event){
    tempo.style.color = `Red`
    clearInterval(timer);
})

reiniciar.addEventListener(`click`, function(event){
    tempo.style.color = `Black`
    clearInterval(timer);
    tempo.innerHTML = "00:00:00";
    segundos = 0;
})






