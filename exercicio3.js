function Confirm(){

    var input_start = document.querySelector("#ctstart")
var input_final = document.querySelector("#ctfinal")
var input_process = document.querySelector("#ctprocess")

var convert_start = Number.parseInt(input_start.value)
var convert_final = Number.parseInt(input_final.value)
var convert_process = Number.parseInt(input_process.value)

var parentdiv = document.querySelector("#parentdiv")

if(input_start.value.length == 0 || input_process.value.length == 0|| input_final.value.length == 0){
    window.alert("ERRO")
    parentdiv.innerHTML = "Impossible to count."
}
else{
    var result = convert_start + convert_process
    var newelement = document.createElement("p")
    newelement.setAttribute('id', 'appendparag')
    var newelementselector = document.querySelector("#appendparag")
    //newelement.appendChild(parentdiv)
    parentdiv.innerHTML = "Counted!"
    parentdiv.appendChild(newelement)

    if(convert_process <= 0){
        window.alert("Invalid value")
    }

    if(convert_start < convert_final){
        for(let c = convert_start; c <= convert_final; c += convert_process){ //Usar repetição nesses casos.
        newelement.innerHTML += ` ${c} \u{1F449}` //Procurar por Unicode emoji list. 
    } newelement.innerHTML += "\u{1F3C1}"
    }else{
        for(let c = convert_start; c >= convert_final; c -= convert_process){
            newelement.innerHTML += ` ${c} \u{1F449}`
        } newelement.innerHTML += "\u{1F3C1}"
    } 
    
    var sectionedit = document.getElementsByTagName('section')[0]
    sectionedit.style.height = '320px'
}
    
}