document.getElementById('btn').addEventListener('click',loadData);
function loadData(){
   // console.log(2);
    //creating XMLHTTPeequest
    const xhr=new XMLHttpRequest();
    //opening
    xhr.open('GET','data.txt',true);
    // this is newer process
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText); 
        }
    }
// used for processing req lik data,or json
xhr.onprogress=function(){
    console.log('ready state',xhr.readyState);
}
xhr.onerror=function(){
    console.log('error');
}

// this is a lod syntax
    // xhr.onreadystatechange=function(){
    //     if (this.status === 200 && this.readyState===4) {
    //         console.log(this.responseText);
    //     }
    // }
    xhr.send();

    //readystate values
    //0:req not initialized
    //1:server connection established
   
    // 200:ok 
    // 403:forbidden
    // 404:not dound


}