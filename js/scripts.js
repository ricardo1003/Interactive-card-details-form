const cvcNumberElement = document.getElementsByClassName("cvc")[0]
const cardNumberElement = document.getElementsByClassName("number")[0]
const cardNumberGroup = [...document.getElementsByClassName("numberGroup")]
const cardNameElement = document.getElementsByClassName("name")[0]
const cardDateElement = document.getElementsByClassName("cardDate")

const sucessState = document.getElementsByClassName("complete")[0]
const formElement = document.getElementsByTagName("form")[0]

const submitButtonElement = document.getElementsByTagName("button")[0]
const continueButtonElement = document.getElementsByTagName("button")[1]

const labelElements = document.getElementsByTagName("label")
const invalidParagraphs = [...document.getElementsByClassName("invalidParagraph")]
const inputElements = [...document.getElementsByTagName("input")]


submitButtonElement.addEventListener("click",()=>{
    for(let i=0; i<inputElements.length; i++){
        if(inputElements[i].value.trim() === ""){
            invalidParagraphs[i].classList.remove("noDisplay")
            inputElements[i].classList.add("invalid")
        }
    }
    if(inputElements[1].value.trim().search(/\D+/g) !== -1){
        invalidParagraphs[1].classList.remove("noDisplay")
        inputElements[1].classList.add("invalid")
    }
})

for(let i=0; i<inputElements.length; i++){
    inputElements[i].addEventListener("input",()=>{
        invalidParagraphs[i].classList.add("noDisplay")
        inputElements[i].classList.remove("invalid")
    })
}

inputElements[1].addEventListener("input",(event)=>{
    const noSpace = event.target.value.replace(/\s/g, "")
    let formattedInput = ""
    for (let i=0; i< noSpace.length;i++){
        if(i>0 && i % 4 === 0){
            formattedInput += " "
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

for(let i=0; i<inputElements.length; i++){
    inputElements[i].addEventListener("focus",()=>{
        labelElements[i].classList.add("focusedLabel")
    })
    inputElements[i].addEventListener("blur",()=>{
        labelElements[i].classList.remove("focusedLabel")
    })
}