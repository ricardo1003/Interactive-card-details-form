const cvcNumberElement = document.getElementsByClassName("cvc")[0]
const cardNumberElement = document.getElementsByClassName("number")[0]
const cardNumberGroup = [...document.getElementsByClassName("numberGroup")]
const cardNameElement = document.getElementsByClassName("name")[0]
const cardDateElement = document.getElementsByClassName("cardDate")[0]

const sucessState = document.getElementsByClassName("complete")[0]
const formElement = document.getElementsByTagName("form")[0]

const submitButtonElement = document.getElementsByTagName("button")[0]
const continueButtonElement = document.getElementsByTagName("button")[1]

const labelElements = document.getElementsByTagName("label")
const invalidParagraphs = [...document.getElementsByClassName("invalidParagraph")]
const inputElements = [...document.getElementsByTagName("input")]
const dateInputs = document.getElementsByClassName("dateInputs")


let validation1 = false
let validation2 = false
let validation3 = false

submitButtonElement.addEventListener("click",()=>{
    for(let i=0; i<inputElements.length; i++){
        if(inputElements[i].value.trim() === ""){
            invalidParagraphs[i].classList.remove("noDisplay")
            inputElements[i].classList.add("invalid")
        }else{validation1 = true}
        if(inputElements[1].value.trim().search(/[^\d\s]/g) !== -1){
            invalidParagraphs[1].classList.remove("noDisplay")
            inputElements[1].classList.add("invalid")
        }else{
            validation2 = true
        }
    }
    if(validation1 && validation2 && validation3){
        sucessState.classList.toggle("noDisplay")
        formElement.classList.toggle("noDisplay")
    }
})

for(let i=0; i<inputElements.length; i++){
    inputElements[i].addEventListener("input",()=>{
        invalidParagraphs[i].classList.add("noDisplay")
        inputElements[i].classList.remove("invalid")
    })
}
inputElements[0].addEventListener("input",()=>{
    cardNameElement.innerHTML = inputElements[0].value.trim()
})
inputElements[1].addEventListener("input",(event)=>{
    const noSpace = event.target.value.replace(/\s/g, "")
    let formattedInput = ""
    for (let i=0; i< noSpace.length;i++){
        if(i>0 && i % 4 === 0){
            formattedInput += " "
        }else{
            validation3 = true
        }
        formattedInput += noSpace[i]
    }
    event.target.value = formattedInput
    let groups = [
        inputElements[1].value.trim().slice(0,4),
        inputElements[1].value.trim().slice(5,9),
        inputElements[1].value.trim().slice(10,14),
        inputElements[1].value.trim().slice(15,19)
    ]
    if (inputElements[1].value.length <= 4){
        cardNumberGroup[0].innerHTML = groups[0]
    }
    if(inputElements[1].value.length > 4){
        cardNumberGroup[1].innerHTML = groups[1]
    }
    if(inputElements[1].value.length > 8){
        cardNumberGroup[2].innerHTML = groups[2]
    }
    if(inputElements[1].value.length > 12){
        cardNumberGroup[3].innerHTML = groups[3]
    }
    function addZeros(group){
        while(group.length < 4){
            group += "0"
        }
        return group
    }
    for(let i=0; i<groups.length; i++){
        if(groups[i].length < 4){
            cardNumberGroup[i].innerHTML = addZeros(groups[i])
        }
    }
})
for(let i=0; i<dateInputs.length; i++){
    dateInputs[i].addEventListener("input",()=>{
        dateInputs[i].value = Math.abs(dateInputs[i].value)
        if(dateInputs[i].value.length > 2){
            const splitted = dateInputs[i].value.split("")
            splitted[2] = ""
            dateInputs[i].value = splitted.join("")
        }
        cardDateElement.innerHTML = `${Math.abs(dateInputs[0].value)}/${Math.abs(dateInputs[1].value)}`
        if(cardDateElement.innerHTML.search(/\//g) === 1){
            const splitted = cardDateElement.innerHTML.split("")
            splitted.splice(1, 0, "0")
            cardDateElement.innerHTML = splitted.join("")
        }
        if (cardDateElement.innerHTML.length === 3){
            const splitted = cardDateElement.innerHTML.split("")
            splitted.push("00")
            cardDateElement.innerHTML = splitted.join("")
        }
        if (cardDateElement.innerHTML.length === 4){
            const splitted = cardDateElement.innerHTML.split("")
            splitted.push("0")
            cardDateElement.innerHTML = splitted.join("")
        }
    })
}
inputElements[4].addEventListener("input",()=>{
    if(inputElements[4].value.length > 3){
        const splitted = inputElements[4].value.split("")
        splitted[2] = ""
        inputElements[4].value = splitted.join("")
    }else{
        cvcNumberElement.innerHTML = inputElements[4].value
    }
})

for(let i=0; i<inputElements.length; i++){
    inputElements[i].addEventListener("focus",()=>{
        if(inputElements[i].classList.contains("invalid") === false){
            labelElements[i].classList.add("focusedLabel")
        }
    })
    inputElements[i].addEventListener("blur",()=>{
            labelElements[i].classList.remove("focusedLabel")
    })
}