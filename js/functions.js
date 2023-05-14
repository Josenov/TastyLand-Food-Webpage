//API
/* export async function getData(){
    let url_Api = '../assets/API/api.json'
    fetch(url_Api)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
} */


let url_Api = '../assets/API/api.json'

export async function loadDataFromApi(){

    try{
    const response = await fetch(url_Api)
    const data = await response.json()
    return data

    }
    catch(error){
        console.log(error)}
    
}


//Draw Cards Function

export function drawCards(arr, container){
    container.innerHTML = "";
    let fragmento = document.createDocumentFragment();
    console.log(container)
    arr.forEach(card =>{
        let div = document.createElement("div")
        div.className="card";
        div.style="width: 300px"
        div.innerHTML = `
        <img src="${card.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">${card.dsc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rate: ${card.rate}</li>
          <li class="list-group-item">Place: ${card.country}</li>
        </ul>
        <div class="card-body d-flex">
          <h3>Price: $${card.price}</h3>
          <a href="#" class="btn btn-primary">Order Now!</a>
        </div>
        `
        fragmento.appendChild(div)
    })
    container.appendChild(fragmento)
}