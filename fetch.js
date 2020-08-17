const http = new Library;

//Getting data
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => {
  let result ='';
  data.forEach((datas)=> {
    result += `
                <li>${datas.name}</li>
                ${datas.username}
                <br>
                ${datas.email}
                <br>
                `;
  })
    document.querySelector('#display').innerHTML= result;
})
.catch(err => console.log(err));

//Creating Data
const user= 
{
  name: "Nathaniel Nosa",
  username: "Nathaniel",
  email: "nathaniel.com"
}
//Posting data
http.post('https://jsonplaceholder.typicode.com/users', user)
.then(data => console.log(data))
.catch(err => console.log(err));

//Updatingdata
http.put('https://jsonplaceholder.typicode.com/users/1', user)
.then(data => console.log(data))
.catch(err => console.log(err));

//Deleting data
http.delete('https://jsonplaceholder.typicode.com/users/1', user)
.then(data => console.log(data))
.catch(err => console.log(err));
