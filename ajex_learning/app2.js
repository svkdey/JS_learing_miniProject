document.getElementById('btn').addEventListener('click',loadJokes);
function loadJokes(e){
   // console.log('get jokes');

const number=document.querySelector('input[type="number"]').value;
 //   console.log(number);

   const xhr=new XMLHttpRequest();
   xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if(this.status===200){
            const jokes = JSON.parse(this.responseText);
           let output='';
            if (jokes.type ==="success"){
                jokes.value.forEach((joke) => {
                    output+=`<div class="card" style="margin:5%">${joke.joke}</div>`
                    
                });

            }else{
                output+=`<p> some Error happen</p>`
            }
            document.querySelector('#output').innerHTML = output;
        }
      
    }
    xhr.send();
    xhr.error=function(){
        console.log('error');
    }
    e.preventDefault();
}