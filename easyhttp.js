function easyHttp(){
    this.http = new XMLHttpRequest();
}

//make a GET request.
easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function(){
       if(self.http.status === 200){
           return callback(null,self.http.responseText);
       }else{
           return callback('Error: ' + self.http.status);
       }
    }
    this.http.send();
}
//make a POST request.
easyHttp.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;
    this.http.onload = function(){

        return callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}
//make a PUT request.
easyHttp.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;
    this.http.onload = function(){

        return callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}
//make a DELETE request.
easyHttp.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function(){
       if(self.http.status === 200){
           return callback(null,'post deleted successfully');
       }else{
           return callback('Error: ' + self.http.status);
       }
    }
    this.http.send();
}

