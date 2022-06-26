let values = document.getElementById('values');
let button = document.querySelector("button");
console.log(button);
let scrValues = "";

for(let i = 0; i<button-length; i++){
    button[i].addEventListener('click',(e)=>{
      let numberEntered = e.target.innerHTML;
      if( numberEntered=='C'){
          values.value="";
      }else if( numberEntered=='='){
          values.value = eval(scrValues)
      }else{
          scrValues+=numberEntered;
          values.value = scrValues;
      }})
    }