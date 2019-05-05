function farTocel(event){
    var temp=input.value;
    // console.log(input.value);
    var cel=(temp-32)*0.556;
    cel=cel.toFixed(2);
   // console.log(cel);
   document.getElementById('output').style.display = 'block';
    output.innerText=`${temp} degree Fahrenheit =${cel} degree Celsius  `;
 //   event.preventDefault();
    
}

function celTofar(event){
  // 
    var temp=input.value;
    var far=(temp/0.556)+32;
    far=far.toFixed(2);
  //  console.log(far);
    // console.log(cel);
    document.getElementById('output').style.display = 'block';
    output.innerText=`${temp} degree Celsius  =${far} degree Fahrenheit`;
 
}

var input=document.getElementById("ip");
var btn=document.getElementById("btn1");
var btn2=document.getElementById("btn2");

var output=document.getElementById("output");
// var options=document.querySelectorAll("#option")
var mainForm=document.querySelectorAll("#mainForm");

btn.addEventListener('click',callTheFunction);
btn2.addEventListener('click',callTheReset);
function callTheReset(){
    window.location.reload();
}


// console.log(output);
// console.log(btn);

function callTheFunction(option,event){
    var option;
    var option = document.querySelector('input[name = choice]:checked').value;
   //console.log(option);
   if(option==='ftoc'){farTocel();}if(option==='ctof'){celTofar();}
 //event.preventDefault();
}

