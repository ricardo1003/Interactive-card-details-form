const cvcNumberElement = document.getElementsByClassName("cvc")[0]
const cardNumberElement = document.getElementsByClassName("number")[0]
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