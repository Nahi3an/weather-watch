class Weather{


  constructor(){
    this.key = "38c903a3786db1837250ca2e631a8af4";
  }


get(){
  
return new Promise((resolve,reject)=>{

  fetch("https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=38c903a3786db1837250ca2e631a8af4")
  .then(res=>res.json())
  .then(weather =>resolve(weather))
  .catch(err => reject(err));
  
})


}

}


