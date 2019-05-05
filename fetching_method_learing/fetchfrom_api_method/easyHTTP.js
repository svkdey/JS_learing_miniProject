class EasyHttp{
    get(url){
        //Promise will return a funtion async 
        return new Promise((resolve,reject)=>{
            fetch(url).then((res) => { return res.json(); })
                .then((data) => {return resolve(data); })
                .catch((err) => { return reject(err); })
        
    })
}
    post(url,data){
        return new Promise( (resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)})
                .then((res) => { return res.json(); })
                .then((data) => { return resolve(data); })
                .catch((err) => { return reject(err); });
        });
     
    }
    put(url,data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((res) => { return res.json(); })
                .then((data) => { return resolve(data); })
                .catch((err) => { return reject(err); });
        });
    }
     delete(url){
         return new Promise((resolve, reject) => {
             fetch(url, {
                 method: 'DELETE',
                 headers: { 'content-type': 'application/json' },
              //   body: JSON.stringify(data)
             })
                 .then((res) => { return res.json(); })
                 .then((data) => { return resolve("deleted"); })
                 .catch((err) => { return reject(err); });
         });
     }

}