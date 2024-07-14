
const btnSubmit= document.getElementById("submit");

const obj={
    thankUState :document.getElementById("ThankYouState"),
    ratingState :document.getElementById("ratingState"),
    options :[...document.getElementsByName("options")],
    showra:document.getElementById("showrating")
}

function show(){
    this.thankUState.style.display="grid";
    
    this.ratingState.style.display="none";
    const numRating = this.options.find(entry =>entry.checked===true).dataset.num 
    
            
    this.showra.innerHTML=`You selected ${numRating} out of 5`;
            
        
    
    
}

btnSubmit.addEventListener('click',show.bind(obj))
