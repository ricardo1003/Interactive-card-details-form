const cvcNumberElement = document.getElementsByClassName("cvc")[0]
const cardNumberElement = document.getElementsByClassName("number")[0]
const cardNumberGroup = [...document.getElementsByClassName("numberGroup")]
const cardNameElement = document.getElementsByClassName("name")[0]
const cardDateElement = document.getElementsByClassName("cardDate")

const sucessState = document.getElementsByClassName("complete")[0]
const formElement = document.getElementsByTagName("form")[0]

const submitButtonElement = document.getElementsByTagName("button")[0]
const continueButtonElement = document.getElementsByTagName("button")[1]

const invalidParagraphs = [...document.getElementsByClassName("invalidParagraph")]
const inputElements = [...document.getElementsByTagName("input")]


submitButtonElement.addEventListener("click",()=>{
    for(let i=0; i<inputElements.length; i++){
        if(inputElements[i].value.trim() === ""){
            invalidParagraphs[i].classList.remove("noDisplay")
            inputElements[i].classList.add("invalid")
        }
    }
})

for(let i=0; i<inputElements.length; i++){
    inputElements[i].addEventListener("input",()=>{
        invalidParagraphs[i].classList.add("noDisplay")
        inputElements[i].classList.remove("invalid")
    })
}

inputElements[1].addEventListener("input",()=>{
    let group1 = inputElements[1].value.trim().slice(0,4)
    cardNumberGroup[0].innerHTML = group1
    let group2 = inputElements[1].value.trim().slice(4,8)
    cardNumberGroup[1].innerHTML = group2
    let group3 = inputElements[1].value.trim().slice(8,12)
    cardNumberGroup[2].innerHTML = group3
    let group4 = inputElements[1].value.trim().slice(12,16)
    cardNumberGroup[3].innerHTML = group4
})