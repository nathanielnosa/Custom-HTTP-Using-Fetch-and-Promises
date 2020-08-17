
class Library{
  //Making a Get HTTP Post
  get(url){
    return new Promise((resolve,reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
    
  //Making a POST HTTP Post
  post(url,data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method: 'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
    
  }
  //Making a PUT HTTP Post

  put(url, data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }

  //Making a DELETE HTTP Post
delete(url){
  return new Promise((resolve,reject)=>{
    fetch(url,{
      method:'DELETE',
      headers:{
        'Content-type':'application/json'
      }
    })
    .then(res => res.json())
    .then(() => resolve("Post Deleted Successfully!"))
    .catch(err => reject(err));
  })
}
}