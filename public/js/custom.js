console.log('hi');

let url = 'http://localhost:4000/contact';

fetch(url)
.then(res => res.json())
.then((out) => {

for (x in out) {
    document.getElementById("demo").innerHTML += 
    out[x]['firstName'] + ' - ' + 
    out[x]['lastName'] + ' - ' + 
    out[x]['email'] + ' - ' + 
    out[x]['phone'] + '<br/>';
  }
})

.catch(err => { throw err });


