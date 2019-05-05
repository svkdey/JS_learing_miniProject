const data=[
    {
      name: 'John Doe',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
      name: 'Jen Smith',
      age: 26,
      gender: 'female',
      lookingfor: 'male',
      location: 'Miami FL',
      image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
      name: 'William Johnson',
      age: 38,
      gender: 'male',
      lookingfor: 'female',
      location: 'Lynn MA',
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
  ];
// class EasyHttp{
//   get(){
//     return new Promise((resolve,reject)=>{
//       fetch('data.json').then(res=>res.json())
//                         .then(data=>resolve(data))
//                         .catch(err=>reject(err))
//     })
//   }
// }


// const http=new EasyHttp();
// console.log((http.get()).promiseValue)


const profiles=profileItaretor(data);
nextProfile()
document.getElementById('btn').addEventListener('click',nextProfile);

function nextProfile(){
    const user=profiles.next().value;
    if(user!==undefined){
        document.getElementById('content').innerHTML=`
    <ul class="list-group">
    <li class="list-group-item"><span>Name</span>:${user.name}   Age:${user.age}</li>
    <li class="list-group-item">Gender:${user.gender} lookingfor:${user.lookingfor}</li>
    <li class="list-group-item">location:${user.gender}</li></ul>`
    document.getElementById('display-picture').innerHTML=`
    <image src="${user.image}"/>`
    }else{window.location.reload()}
    
}
//using iterator

// function profileItaretor(profiles){
//     let index=0;
//     return {
//         next:function(){
//         return index < profiles.length?{value:profiles[index++],done:false}:{done:true}
//     }};

// };
// console.log(next());
//using generator


function* profileItaretor(profiles){
    let index=0;
    while(true){
        yield profiles[index++];
    }

};