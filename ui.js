class UI{


  constructor(){

    this.heading = document.querySelector('.header');
    this.card = document.querySelector('.card')

  }

  showHeader(data){

    let output;

    const [cel,far] = this.convertTemp(data.main.temp);
    
    output = 
    `<h3>${data.name}, ${data.sys.country}</h3>
    <h4>${data.weather[0].main}</h4>
    <h4>${cel} C (${far} F)</h4>
    `
      
    this.heading.innerHTML = output;
  }


  convertTemp(kel){

    let cel,far;
    
    cel = kel - 273.15;

    far = ((kel - 273.15)* 9/5)+ 32;

    return [cel, far];

  }

  
}