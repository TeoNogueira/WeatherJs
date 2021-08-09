document.querySelector('.busca').addEventListener('submit', (event) => {
event.preventDefault();

let input = document.querySelector('#searchInput').value

if(input !== '') {

    showWarning('Carregando...')

} 
console.log(input)

let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=fbd527baf0cf1291831321e6c1faad42&units=metric&lang=pt_br`
//d06cdb298fafc83c520d5ab877fc477e&
});


function showWarning(msg) {


    document.querySelector('.aviso').innerHTML =  msg;
}