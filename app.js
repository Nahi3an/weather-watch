const weather = new Weather();
const ui = new UI();

weather.set()
.then(data=>{
  
  ui.showHeader(data);
  ui.showCard(data);

})
.catch(err=>{

  console.log(err);
  
})


const showBtn = document.getElementById('show');

showBtn.addEventListener('click',()=>{

  const cityInput = document.getElementById('city').value;
 

    weather.get(cityInput).then(data=>{

      if(data.message==='city not found'){

       ui.showAlert('City Not Found!','alert alert-danger')

      }
      else{
        ui.showHeader(data);
        ui.showCard(data);
        
      }
     
    
     


    }).catch(err=>{

      console.log(err);

    })

    document.getElementById('city').value = '';


});

