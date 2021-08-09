document.querySelector('.busca').addEventListener('submit', async (event) => {
event.preventDefault();

let input = document.querySelector('#searchInput').value

if(input !== '') {

    showWarning('Carregando...')

} 
console.log(input)

let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=fbd527baf0cf1291831321e6c1faad42&units=metric&lang=pt_br`
//d06cdb298fafc83c520d5ab877fc477e&
let results = await fetch(url);

let json = await results.json();

console.log(json)
if(json.cod === 200) {

    showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg
    })
    

} else {

    showWarning('Não Encontramos essa localização.')
}

});

function showInfo(json) {

showWarning('');

document.querySelector('.resultado').style.display = 'block';

document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`
document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`

document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle}deg)`;
}


function showWarning(msg) {


    document.querySelector('.aviso').innerHTML =  msg;
}