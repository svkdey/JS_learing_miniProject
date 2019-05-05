class EasyHttp{
    async get(url){
        const response=await fetch(url);
    const data=await response.json();
        console.log(typeof data);
        return data; 
   }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        const data1=await response.json();
       
        return data1;
      
    }
   async put(url, data) {
       const response = await fetch(url, {
           method: 'PUT',
           headers: { 'content-type': 'application/json' },
           body: JSON.stringify(data)
       })
        const data1=await response.json(response);
        return data1;
    }
  async delete(url) {
      const response = await fetch(url, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
          //body: JSON.stringify(data)
      })
      const data1 = await "deletition successfull";
      return data1;
  }
}