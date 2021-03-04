//! working fine, but not really perfect 
//! all datatypes by answers are set to "STRING" (lines 28,34), which is bad for:
//! Boolean and Number values as well as double/equal answers by different questions!  

//* Solutions is to pick just the proper Index of data array by button.click
//? erstmal keine Lust für  )


let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: "false"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: "4"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
]


const div = document.querySelector("div")

// //!IMG
// let img = document.createElement("img")
// img.src = data[0].url
// div.appendChild(img)

// //! QUESTION
// let question = document.createElement("p")
// question.textContent = data[0].question
// div.appendChild(question)

// //! Answechoice
// // let choice = document.createElement("button")
// // choice.textContent = data[0].choice[0]
// // div.appendChild(choice)
// //! all answers

// let arrChoices = data[0].choice
// let wrapperAnswers = document.createElement("section")

// for (let i = 0; i < arrChoices.length; i++) {
//     let choice = document.createElement("button")
//     choice.textContent = data[0].choice[i]
//     wrapperAnswers.appendChild(choice)
//     div.appendChild(wrapperAnswers)
// }

//! made completly full first data object in loop
let objLength = 4;


// for (let i = 0; i < 3; i++) {
//     if (i == 0) {
//         let img = document.createElement("img")
//         img.src = data[0].url
//         div.appendChild(img)
//     } else if (i == 1) {
//         let question = document.createElement("p")
//         question.textContent = data[0].question
//         div.appendChild(question)
//     } else if (i == 2) {
//         let arrChoices = data[0].choice
//         let wrapperAnswers = document.createElement("section")

//         for (let i = 0; i < arrChoices.length; i++) {
//             let choice = document.createElement("button")
//             choice.textContent = data[0].choice[i]
//             wrapperAnswers.appendChild(choice)
//             div.appendChild(wrapperAnswers)
//         }
//     }
// }


//? for the whole
let dataLength = data.length;

//!   DRAWING ALL THE ITEMS!!
data.forEach(elem => {
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            let img = document.createElement("img")
            img.src = elem.url
            div.appendChild(img)
        } else if (i == 1) {
            let question = document.createElement("p")
            question.textContent = elem.question
            div.appendChild(question)
        } else if (i == 2) {
            let arrChoices = elem.choice
            let wrapperAnswers = document.createElement("section")

            for (let i = 0; i < arrChoices.length; i++) {
                let choice = document.createElement("button")
                choice.textContent = elem.choice[i]
                wrapperAnswers.appendChild(choice)
                div.appendChild(wrapperAnswers)
            }
        }
    }
})

//!   COMPARISON for right / wrong choice!!

let allButtons = document.querySelectorAll("button")

let arrayAnswers = [];
for (i = 0; i < dataLength; i++) {
    arrayAnswers.push(data[i].answer)
}

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", () => {
        if (arrayAnswers.includes(String(allButtons[i].textContent))) {
            allButtons[i].style.color = "green"
        } else {
            allButtons[i].style.color = "red"
        }
        console.log(allButtons[i].innerHTML)
    }
    )
}








