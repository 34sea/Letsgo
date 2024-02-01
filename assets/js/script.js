let icoEmp = document.querySelectorAll(".icoEmp")

for(let i=0; i<icoEmp.length; i++){
    
    icoEmp[i].addEventListener("mouseover", ()=>{
        for(let c=0; c<icoEmp.length; c++){
            if(icoEmp[c].classList.contains("visivel")){
                icoEmp[c].classList.remove('visivel')
                icoEmp[c].classList.add('opaco')
            }
        }
        if(icoEmp[i].classList.contains("opaco")){
            icoEmp[i].classList.remove('opaco')
            icoEmp[i].classList.add('visivel')
        }
    })
}

let faqComun = document.querySelectorAll(".faqComun")
let comuQuetion = document.querySelectorAll(".comuQuetion")

for(let j=0; j<faqComun.length; j++){
    faqComun[j].addEventListener("click", ()=>{
        for(let c=0; c<faqComun.length; c++){
            console.log(c)
            if(faqComun[c].classList.contains("minimizeCampo") && c!=j){
                faqComun[c].classList.add("maxmizeCampo")
                faqComun[c].classList.remove("minimizeCampo")
                comuQuetion[c].classList.add("pergunta")
                comuQuetion[c].classList.remove("aberta")
                faqComun[c].textContent = "+"
                document.querySelectorAll(".comuQuetion")[c].style.height = "30px"
                //alert("minimizar")
    
            }
        }
        if(faqComun[j].classList.contains("minimizeCampo")){
            faqComun[j].classList.add("maxmizeCampo")
            faqComun[j].classList.remove("minimizeCampo")
            comuQuetion[j].classList.add("pergunta")
            comuQuetion[j].classList.remove("aberta")
            faqComun[j].textContent = "+"
            document.querySelectorAll(".comuQuetion")[j].style.height = "30px"
            //alert("minimizar")

        }else if(faqComun[j].classList.contains("maxmizeCampo")){
            faqComun[j].classList.add("minimizeCampo")
            faqComun[j].classList.remove("maxmizeCampo")
            comuQuetion[j].classList.add("aberta")
            comuQuetion[j].classList.remove("pergunta")
            faqComun[j].textContent = "-"
            document.querySelectorAll(".comuQuetion")[j].style.height = "200px"
            //alert("maximzar")
        }
    })
}

//alert("ya")