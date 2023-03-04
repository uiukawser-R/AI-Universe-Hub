 const loadAI_Universe_Hub= async ()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    const res=await fetch(url);
    const data=await res.json();
    // console.log(data.data.tools);
     displayHub(data.data.tools)
    
}
const displayHub =hubs=>{
    // console.log(hub)
    const hubContainer=document.getElementById('hub-container');
    hubs.forEach(hub => {
        console.log(hub)
        const hubDiv=document.createElement('div');
        hubDiv.classList.add('col')
        hubDiv.innerHTML=`
        <div class="card">
        <img src="${hub.image}" style="height: 300px;" class="card-img-top p-2" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-text">${hub.features}</p>
          <hr>
          <div class="d-flex justify-content-between align" >
          <div>
              <h3>${hub.name}</h3>
              <p>${hub.published_in}</p>
          </div>
          <div>
              <button type="button" class="btn btn-outline-danger  ">-></button>
          </div>
      </div>

        </div>
      </div>
        `
        hubContainer.appendChild(hubDiv);
    });
}
loadAI_Universe_Hub();