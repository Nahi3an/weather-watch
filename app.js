const weather = new Weather();
const ui = new UI();

weather.get()
.then(data=>{
  
  ui.showHeader(data);

})
.catch(err=>{

  console.log(err);
  
})



