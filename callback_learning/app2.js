const datas=[
    {id:1,name:"souvik dey"},
    { id: 2, name: "jose potilla" }
]

// sync call

// function setPosts(post){
//     setTimeout(()=>{
//         datas.push(post);
//     },2000)
// }

// function getPosts() {
//     setTimeout(() => {
//         var op='';
//        datas.forEach((data)=>{
//         op+=`<li>${data.id}===> ${data.name}</li>`
//        })
//     document.getElementById('output').innerHTML=op;
//     }, 1000)
// }
// setPosts({ id: 3, name: "John Hank" });
// getPosts();

// async call

function setPosts(post,callback){
    setTimeout(()=>{
        datas.push(post);
        callback();
    },2000)
}

function getPosts() {
    setTimeout(() => {
        var op='';
       datas.forEach((data)=>{
        op+=`<li>${data.id}===> ${data.name}</li>`
       })
    document.getElementById('output').innerHTML=op;
    }, 1000)
}
setPosts({ id: 3, name: "John Hank" }, getPosts);



