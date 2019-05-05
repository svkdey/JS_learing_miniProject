document.querySelector('#loan-form').addEventListener('submit',function(event){
    //
    document.getElementById('results').style.display='none';

    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResult,1);
    event.preventDefault();
});

function calculateResult(event){
console.log('calc')
    var amount = document.querySelector("#amount");
    var interest = document.querySelector("#interest");
    var years = document.querySelector("#years");
    // console.log(amount.value); 
    // console.log(interest.value); 
    // console.log(years.value);
    amount=parseFloat(amount.value);
    interest = (parseFloat(interest.value))/100/12;
    years = parseFloat(years.value)*12;

    var Monthly = document.querySelector("#Monthly");
    var Tamount = document.querySelector("#Tamount");
    var Tinterest = document.querySelector("#Tinterest");


    const x=Math.pow(1+interest,years);

    const mon=(amount*x*interest)/(x-1);
    console.log(mon);
    if(isFinite(mon)){
        Monthly.value=mon.toFixed(2);
        Tamount.value=(mon*years).toFixed(2);
        Tinterest.value = ((mon * years).toFixed(2) - amount);
        document.getElementById('loading').style.display = 'none';

        document.getElementById('results').style.display = 'block';
    }else{
        showErr('Please check your numbers');
    }

   

  
}


function showErr(error){
    document.getElementById('loading').style.display = 'none';

    document.getElementById('results').style.display = 'none';
    const errorDiv=document.createElement('div');

    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');

    errorDiv.className ='alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv,heading);
    setTimeout(clearError,3000);

}

function clearError(){
    document.querySelector('.alert').remove();
}