const http=new EasyHttp();

//making get request

// http.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
    
//     document.getElementById('output').textContent=JSON.stringify(data);
// }).catch((err) => {
//     document.getElementById('output').textContent = err;})
const data = {
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"};
//making post request

//     http.post("https://jsonplaceholder.typicode.com/posts",data).then((data) => {document.getElementById('output').textContent=JSON.stringify(data);
// }).catch((err) => {
//     document.getElementById('output').textContent = err;})


    // making PUT resuerst
// http.put("https://jsonplaceholder.typicode.com/posts/2", data).then((data) => {
//     document.getElementById('output').textContent = JSON.stringify(data);
// }).catch((err) => {
//     document.getElementById('output').textContent = err;
// })


//making delete request
http.delete("https://jsonplaceholder.typicode.com/posts/2").then((data) => {
    document.getElementById('output').textContent = data;
}).catch((err) => {
    document.getElementById('output').textContent = err;
})
