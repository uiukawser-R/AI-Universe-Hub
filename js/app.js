 const loadAI_Universe_Hub= async ()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    const res=await fetch(url);
    const data=await res.json();
    // console.log(data.data.tools);
     displayHub(data.data.tools)
    
}

loadAI_Universe_Hub();