  console.log("Hello");
const celcius=document.querySelector("#celcius");
 farenheit=document.querySelector("#farenheit");


//set focus to the Celcius input field when the page loads

window.addEventListener("load", ()=> celcius.focus());

//Convert Celcius to Farenheit when the value changes

celcius.addEventListener("input", ()=>{
   farenheit.value=((celcius.value * 9)/5 +32).toFixed(2);
   if(!celcius.value){
    farenheit.value="";
   }
}
);

//Convert Farenheit to celcius when the Farenheit value changes

farenheit.addEventListener("input", ()=>{
    celcius.value= (((farenheit.value -32)*5)/9).toFixed(2);
     if(!farenheit.value){
        celcius.value="";
     }
});