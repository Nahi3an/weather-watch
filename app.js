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
 

  if(cityInput!==''){

    weather.get(cityInput).then(data=>{

      ui.showHeader(data);
      ui.showCard(data);


    }).catch(err=>{

      console.log(err);

    })

  }
  else{

   


  }


})

