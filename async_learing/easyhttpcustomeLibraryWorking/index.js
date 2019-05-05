const http1=new easyHTTP();

//Get Posts
// http1.get('https://jsonplaceholder.typicode.com/posts',
// function(err,posts){
//     if(err){console.log(err)}
//     else { console.log(posts)}
// })

//Post request
const data = {
    "title": "abunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "we et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum estautem sunt rem eveniet architecto"};
// http1.post('https://jsonplaceholder.typicode.com/posts',data,
//     function (err, post) {
//         if (err) { console.log(err) }
//         else { console.log(post) }
//     })


// put request
// http1.put('https://jsonplaceholder.typicode.com/posts/1', data,
//     function (err, post) {
//         if (err) { console.log(err) }
//         else { console.log(post) }
//     });

http1.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err,posts){
    if(err){console.log(err)}
    else { console.log(posts)}
});