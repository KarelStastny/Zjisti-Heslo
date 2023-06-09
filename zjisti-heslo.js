const mainAnswer = ["Ron", "Modrá", "Pes", "20", "112", "růžová", "značkovací", "32", "40075"]
const mainAnswerBad = ["Hermiona", "Zelená", "Kočka", "18", "1 30", "žlutá", "skriptovací", "28", "40 000"]


// ====== Ask 1
document.querySelector(".ask-1").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-1")

    if(ask.toLowerCase().trim() === mainAnswer[0].toLocaleLowerCase().trim()){
        answer.textContent = "7"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[0].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 2
document.querySelector(".ask-2").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-2")

    if(ask.toLowerCase().trim() === mainAnswer[1].toLocaleLowerCase().trim()){
        answer.textContent = "3"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[1].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 3
document.querySelector(".ask-3").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-3")

    if(ask.toLowerCase().trim() === mainAnswer[2].toLocaleLowerCase().trim()){
        answer.textContent = "8"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[2].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 4
document.querySelector(".ask-4").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-4")

    if(ask.toLowerCase().trim() === mainAnswer[3].toLocaleLowerCase().trim()){
        answer.textContent = "3"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[3].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 5
document.querySelector(".ask-5").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-5")

    if(ask.toLowerCase().trim() === mainAnswer[4].toLocaleLowerCase().trim()){
        answer.textContent = "2"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[4].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 6
document.querySelector(".ask-6").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-6")

    if(ask.toLowerCase().trim() === mainAnswer[5].toLocaleLowerCase().trim()){
        answer.textContent = "5"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[5].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 7
document.querySelector(".ask-7").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-7")

    if(ask.toLowerCase().trim() === mainAnswer[6].toLocaleLowerCase().trim()){
        answer.textContent = "3"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[6].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 8
document.querySelector(".ask-8").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-8")

    if(ask.toLowerCase().trim() === mainAnswer[7].toLocaleLowerCase().trim()){
        answer.textContent = "1"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[7].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})
// ====== Ask 9
document.querySelector(".ask-9").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-9")

    if(ask.toLowerCase().trim() === mainAnswer[8].toLocaleLowerCase().trim()){
        answer.textContent = "8"
    }else if (ask.toLowerCase().trim() === mainAnswerBad[8].toLocaleLowerCase().trim()){
        answer.textContent = "0"
    }else{
        answer.textContent = "?"
    }
})






//=============Ověření hesla

// odstavec s výsledkem
let odstavec = document.createElement("p")

//zjištění hodnoty ověřovacího políčka
let value = document.querySelector(".control-pasword").addEventListener("change", function(event){
    value = event.target.value

    //Po stisknutí tlačítka
    document.querySelector(".btn").addEventListener("click", function(event){

   
        if (value !== "738325318"){
            odstavec.classList.remove("good-answer")
            odstavec.classList.add("bad-answer")
            odstavec.textContent = "Chybné heslo. Heslo neobsahuje žádnou 0, zkontroluj si odpovědi"
            // console.log(odstavec)
            document.querySelector(".vysledek").appendChild(odstavec)

        }else{
            odstavec.classList.remove("bad-answer")
            odstavec.classList.add("good-answer")
            odstavec.textContent = "Správné heslo."
            document.querySelector(".vysledek").appendChild(odstavec)
            // console.log(odstavec)
        }
        })
 })

