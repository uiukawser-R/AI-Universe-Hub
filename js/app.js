 
 
 const loadAI_Universe_Hub= async (dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    const res=await fetch(url);
    const data=await res.json();
    // console.log(data.data.tools);
    // loading start 
    toggleSpinner(true);
   
     displayHub(data.data.tools,dataLimit)
     
     
}


const displayHub =(hubs,dataLimit)=>{
    
    console.log(hubs)
        // display 6 hubs only 
        const showAll = document.getElementById('show-all')
        if (dataLimit && hubs.length > 6) {
            hubs = hubs.slice(0, 6);
            showAll.classList.remove('d-none')
    
        }
        else{
            showAll.classList.add('d-none')
        }
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
              <button type="button" class="btn btn-outline-danger bg-danger-subtle border border-0 mt-3 ">-></button>
          </div>
      </div>

        </div>
      </div>
        `
        hubContainer.appendChild(hubDiv);
        
    });
    // loading stop 
    toggleSpinner(false);
}

// loder 
const toggleSpinner=isLoding=>{
    const loaderSection=document.getElementById('loder')
    if(isLoding){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click',function(){
    loadAI_Universe_Hub();
})
loadAI_Universe_Hub(6);