 
 
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
    
    // console.log(hubs)
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
    hubContainer.innerHTML = '';
    hubs.forEach(hub => {
        // console.log(hub)
        const hubDiv=document.createElement('div');
        hubDiv.classList.add('col')
        hubDiv.innerHTML=`
        <div class="card">
        <img src="${hub.image}" style="height: 300px;" class="card-img-top p-2" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-text">
          <ol>
          <li>${hub.features[0]}</li>
          <li>${hub.features[1]}</li>
          <li>${hub.features[2]}</li>
      </ol>
          
          </p>
          <hr>
          <div class="d-flex justify-content-between align" >
          <div>
              <h3>${hub.name}</h3>
              <p>${hub.published_in}</p>
              
          </div>
          <div>
              <button onclick="loadHubDetails('${hub.id}')" type="button" class="btn btn-outline-danger bg-danger-subtle border border-0 mt-3" data-bs-toggle="modal" data-bs-target="#hubModel">-></button>
              
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



const loadHubDetails=async id =>{
    const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url)
    const data= await res.json()
    // console.log(data.data);
    displayHubDetails(data.data)
}

const displayHubDetails=Hub=>{
    console.log(Hub);
    const HubDescription=document.getElementById('hub-description')
    HubDescription.innerText=Hub.description
    document.getElementById('p1').innerText=Hub?.pricing?.[0].price? Hub.pricing[0].price: "hello"
    document.getElementById('p2').innerText=Hub?.pricing?.[0].plan ? Hub.pricing[0].plan : "hello"

    document.getElementById('p3').innerText=Hub?.pricing?.[1].price? Hub.pricing[1].price: "hello"
    document.getElementById('p4').innerText=Hub?.pricing?.[1].plan ? Hub.pricing[1].plan : "hello"

    document.getElementById('p5').innerText=Hub?.pricing?.[2].price? Hub.pricing[2].price: "hello"
    document.getElementById('p6').innerText=Hub?.pricing?.[2].plan ? Hub.pricing[2].plan : "hello"

    document.getElementById('l1').innerText=Hub.features[1].feature_name
    document.getElementById('l2').innerText=Hub.features[2].feature_name
    document.getElementById('l3').innerText=Hub.features[3].feature_name
    
    document.getElementById('l4').innerText=Hub?.integrations[0]?Hub.integrations[0]:"no Data"
    document.getElementById('l5').innerText=Hub?.integrations[1]?Hub.integrations[1]:"no Data"
    document.getElementById('l6').innerText=Hub?.integrations[2]?Hub.integrations[2]:"no Data"


    document.getElementById('card-body').innerHTML= `
    <div class="text-center">
                                        <img src="${Hub.image_link[0]}" class="img-fluid" alt="" srcset="">
                                        <h5 class="pt-3">${Hub.input_output_examples[0].input}</h5>
                                        <div class="text-center rounded p-1"
                                            style="position:relative; top: -310px; right: -220px; background-color: red; color: white; height: 32px; width: 140px;">
                                            ${Hub.accuracy?.score?Hub.accuracy.score*100 : "no data"}% accuracy
                                        </div>
                                        <p>${Hub.input_output_examples[0].output}</p>
                                    </div>
    `
  
    

}

