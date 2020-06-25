class Weather{


  constructor(){
    this.key = "38c903a3786db1837250ca2e631a8af4";
  }


set(){
  
return new Promise((resolve,reject)=>{

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${this.key}`)
  .then(res=>res.json())
  .then(weather =>resolve(weather))
  .catch(err => reject(err));
  
});


}


get(city){

  return new Promise((resolve,reject)=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38c903a3786db1837250ca2e631a8af4`)
    .then(res=>res.json())
    .then(weather =>resolve(weather))
    .catch(err => reject(err));
    
  })

  
}
}


