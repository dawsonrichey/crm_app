console.log('hi');

let url = 'http://localhost:4000/contact';

fetch(url)
.then(res => res.json())
.then((out) => {
//   var myJSON2 = JSON.parse(out);
// document.getElementById("demo2").innerHTML = myJSON2;

for (x in out) {
    document.getElementById("demo").innerHTML += 
    out[x]['firstName'] + ' - ' + 
    out[x]['lastName'] + ' - ' + 
    out[x]['email'] + ' - ' + 
    out[x]['phone'] + '<br/>';
  }
})
.catch(err => { throw err });


