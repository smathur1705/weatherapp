let content= document.querySelector('#btn');
let temperature = document.querySelector('#temp');
let humidity = document.querySelector('#humidity');




<!--ui pr show krne k lea -->

function renderWeatherInfo(data){
        let newPara = document.createElement('p');
newPara.textContent= `temp= ${data?.main?.temp}°C  
                     speed= ${data?.wind?.speed} , 
                     city= ${data?.name}`


temperature.appendChild(newPara);
temperature.insertAdjacentElement('beforebegin',newPara)



let myPara= document.createElement('p');
myPara.textContent= `humidity =${data?.main?.humidity}`

humidity.appendChild(myPara);

}


<!-- data api call se lane k lea-->

content.addEventListener('click',async function(event){
    try{

        let response = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=hisar&appid=a2d6789325225a5e5bc81ca625ac260d ')
        let data = await response.json();
        console.log(data);
        renderWeatherInfo(data)                 // UI pr show krne k lea temp ko function call kr dea
       
    }
    catch(error){
        console.log('errorrr found' , error);
        alert('error foundd');

    }



})



