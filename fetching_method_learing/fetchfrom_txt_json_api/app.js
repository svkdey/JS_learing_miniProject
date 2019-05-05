 document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJSON);
document.getElementById('btn3').addEventListener('click', getAPI);
// console.log(btn1)

function getText(){
    fetch('data.txt').then((res)=>{return res.text()})
                    .then((data)=>{
                       // console.log(data);
                        document.getElementById('output').innerHTML=data;
                    }).catch((err)=>{
                        document.getElementById('output').innerHTML = err;
                    })
}

function getJSON() {
    fetch('data.json').then((res) => { return res.json() })
        .then((data) => {
            // console.log(data);
            var output='';
            data.forEach((item)=>{
                output+=`
                <li>${item.name}</li>`

            })
            document.getElementById('output').innerHTML = output;
        }).catch((err) => {
            document.getElementById('output').innerHTML = err;
        })
}

function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => { return res.json() })
        .then((data) => {
            // console.log(data);
            var output = '';
            data.forEach((item) => {
                output += `
                <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">${item.title}</div>
  <div class="card-body">
    
    <p class="card-text">${item.body}</p>
  </div>
</div>`

            })
            document.getElementById('output').innerHTML = output;
        }).catch((err) => {
            document.getElementById('output').innerHTML = err;
        })
}
