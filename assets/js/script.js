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

let infoEmpreendi = document.querySelector(".infoEmpreendi")
let tmp1
let tmp2
let tmp3
let tmp4
let tempo = 25
let cima = false
let carregouContagem = false
infoEmpreendi.addEventListener("mouseover", ()=>{
    if(!carregouContagem){
        clearInterval(tmp1)
        tmp1 = setInterval(contagemN, tempo)
        clearInterval(tmp2)
        tmp2 = setInterval(contagemN2, tempo)
        clearInterval(tmp3)
        tmp3 = setInterval(contagemN3, tempo)
        clearInterval(tmp4)
        tmp4 = setInterval(contagemN4, tempo)
        cima=true
        carregouContagem=true
    }
    
})

infoEmpreendi.addEventListener("mouseout", ()=>{

    cima=false
    
})

let lotes = [490, 10, 50, 5000]

let contagem = document.querySelectorAll(".contagem")




let lote1 = 0

function contagemN(){
    if(lote1 != lotes[0]){

        lote1+=10
        contagem[0].textContent = lote1
        
    }else{
        lote1 = 0
        clearInterval(tmp1)
    }
}

let lote2 = 0

function contagemN2(){
    if(lote2 != lotes[1]){

        lote2++
        contagem[1].textContent = lote2
        
    }else{
        lote2 = 0
        clearInterval(tmp2)
    }
}

let lote3 = 0

function contagemN3(){
    if(lote3 != lotes[2]){

        lote3++
        contagem[2].textContent = lote3
        
    }else{
        lote3 = 0
        clearInterval(tmp3)
    }
}

let lote4 = 0

function contagemN4(){
    if(lote4 != lotes[3]){

        lote4+=100
        contagem[3].textContent = lote4
        
    }else{
        lote4 = 0
        clearInterval(tmp4)
    }
}


document.addEventListener("scroll", ()=>{
    let coordenadas = document.getElementById("infoEmpreendi").getBoundingClientRect();
    if((coordenadas.top) <= 24 && coordenadas.top >= -435 && cima==false && !carregouContagem){
        clearInterval(tmp1)
        tmp1 = setInterval(contagemN, tempo)
        clearInterval(tmp2)
        tmp2 = setInterval(contagemN2, tempo)
        clearInterval(tmp3)
        tmp3 = setInterval(contagemN3, tempo)
        clearInterval(tmp4)
        tmp4 = setInterval(contagemN4, tempo)
        carregouContagem=true

    }
})

