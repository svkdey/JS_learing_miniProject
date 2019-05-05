function easyHTTP(){
this.http=new XMLHttpRequest();
}

//make HTTP get req by prototypes
easyHTTP.prototype.get = function (url,callback) {
    this.http.open('GET', url, true);

    
    this.http.onload =  ()=> {
        if (this.http.status === 200) {
//return error as null and response

            callback(null,this.http.responseText) ;
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}


//make HTTP post req
easyHTTP.prototype.post=function(url,data,callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type','application/json');

    this.http.onload = () => {
      
            //return error as null and response
         callback(null, this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}


//make HTTP put req
easyHTTP.prototype.put= function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {

        //return error as null and response
        callback(null, this.http.responseText);

    }

    this.http.send(JSON.stringify(data));
}

//make HTTP delete req

easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('delete', url, true);


    this.http.onload = () => {
        if (this.http.status === 200) {
            //return error as null and response

            callback(null, `delete item:${this.http.responseText}`);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}
