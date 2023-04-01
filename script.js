var container=document.createElement("div");
container.className="container";
var row =document.createElement("div");
row.classList.add("row","m-3");
row.classname="row";
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));
function foo(data1){
    for(i=0;i<data1.length;i++){
       row.innerHTML+=
       `<div class="col-md-4">
       <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
       <img src="${data1[i].flag}" class="card-img-top" alt="countries">
       <div class="card-header">Header</div>
       <div class="card-body">
         <h5 class="card-title">${data1[i].name}</h5>
         <p class="card-text">Capital : ${data1[i].capital}</p>
         <p class="card-text">Population : ${data1[i].population}</p>
         <p class="card-text">latlng : ${data1[i].latlng}</p>
         
       </div>
     </div>
       </div>`
        }
        document.body.append(container);
}
