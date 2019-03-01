//initialize easyHttp function
const http = new easyHttp();

//get posts 
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
   if(err){
       console.log(err);
   }else{
        console.log(posts);
   }
});

// get single post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
   if(err){
       console.log(err);
   }else{
        console.log(posts);
   }
});

//craete data 
const data = {
    title:"my first rest api data",
    body: "this is a rest api data for testing"
}
//post data
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, posts){
    if(err){
        console.log(JSON.stringify(err));
    }else{
     console.log(posts);
    }
});

// update data

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
})

// delete data 
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
})
