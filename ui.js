class UI{


  constructor(){

    this.heading = document.querySelector('.header');
    this.card = document.querySelector('.card')

  }

  showHeader(data){

   
    let output;

    const [cel,far] = this.convert(data.main.temp,data.main.feels_like);
    
    output = 
    `<h3 class='text-light font-weight-bolder'>${data.name}</h3>
    <h3 class='text-light font-italic'>Country Code: <span class='text-danger'>${data.sys.country}</span> </h3>
    <h4 class='text-light'>${data.weather[0].main}</h4>
    <h4 class='text-light'>Temperature: ${cel} C (${far} F)</h4>
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
 
    console.log(data)
    const [ , , fCel, fFar] = this.convert(data.main.temp,data.main.feels_like)

    const kmWind = data.wind.speed * 3.6;
  
   
    let output =
    `<li class="list-group-item bg-list font-weight-bolder">Feels Like: ${fCel} C (${fFar} F)</li>
    <li class="list-group-item bg-list font-weight-bolder">Humidity: ${data.main.humidity}%</li>
    <li class="list-group-item bg-list font-weight-bolder">Wind Speed: ${kmWind} km/h</li>`

    this.card.innerHTML = output;

  }

  showAlert(cityName,className){

    const div = document.createElement('div');
    
    div.className = className;

    div.appendChild(document.createTextNode(`No City Named ${cityName} Found!`));
    console.log(div);

    const parent = document.querySelector('.container');
    const afterDiv = document.querySelector('.card');

    parent.insertBefore(div,afterDiv);

    setTimeout(function(){

      document.querySelector('.alert').remove();
      
    },3000)

  }
  
}