class UI{


  constructor(){

    this.heading = document.querySelector('.header');
    this.card = document.querySelector('.card')

  }

  showHeader(data){

    let output;

    const [cel,far] = this.convert(data.main.temp,data.main.feels_like);
    
    output = 
    `<h3>${data.name}, ${data.sys.country}</h3>
    <h4>${data.weather[0].main}</h4>
    <h4>${cel} C (${far} F)</h4>
    `
      
    this.heading.innerHTML = output;

  }
  convert(kel,fKel){

    let cel,far,fCel,fFar;
    
    cel = (kel - 273.15).toFixed(1);
    fCel = (fKel - 273.15).toFixed(1);

    far = (((kel - 273.15)* 9/5)+ 32).toFixed(1);
    fFar = (((fKel - 273.15)* 9/5)+ 32).toFixed(1);

    
    return [cel, far, fCel, fFar];

  }

  showCard(data){
 
    
    const [ , , fCel, fFar] = this.convert(data.main.temp,data.main.feels_like)
    console.log(fCel);
    console.log(fFar);

    const kmWind = data.wind.speed * 3.6;
  
   
    let output =
    `<li class="list-group-item">Feels Like: ${fCel} C (${fFar} F)</li>
    <li class="list-group-item">Humidity: ${data.main.humidity}%</li>
    <li class="list-group-item">Wind Speed: ${kmWind} km/h</li>`

    this.card.innerHTML = output;

  }

  
}