const quiz = [{
    id: 1,
    ques: "1.What is the official Language of India?",ans :"Hindi",
    choice1: "Tamil", choice2:"Bengali",choice3: "Telugu",choice4: "Hindi"
    

},
{
    id: 2,
    ques: "2.Which is the national animal of india ?",ans:"Tiger",
     choice1: "Peacock",choice2: "Lion",choice3: "Tiger", choice4: "Elephant"

},
{
    id: 2,
    ques: "3.What is the capital of India ?",ans:"Delhi",
     choice1: " Gujarat",choice2: "Maharastra",choice3: "Delhi", choice4: "Tamilnadu"


},
{
    id: 4,
    ques: "4.What is the capital of Gujarat ?",ans:"Gandhinagar",
     choice1: " Surat",choice2: "vadodara",choice3: "Gandhinagar", choice4: "Rajkot"


},
{
    id: 5,
    ques: "5.Which is the Longest River in the world ?",ans:"Nile",
     choice1: " Ganga",choice2: "Yamuna",choice3: "Nile", choice4: "Kaveri"


}


]

// targeting the values

const btns = document.querySelectorAll("button");
const nxt=document.querySelector(".nxt")
const prev =document.querySelector(".prev")
const check=document.querySelector(".check")

const reveal = document.querySelector('.reveal');
const question = document.querySelector('.question');
// console.log(question);
const choice1 = document.querySelector('.choice1');
// console.log(choice1);
const choice2 = document.querySelector('.choice2')
// console.log(choice2);
const choice3 = document.querySelector('.choice3')
// console.log(choice3);
const choice4 = document.querySelector('.choice4')
// console.log(choice4);
const choice=document.querySelectorAll('#choice')

const main=document.querySelector(".main")
const main2=document.querySelector(".main2")
const answers=document.querySelector(".answers")



const total =document.querySelector("#total")

let score=0
let plus = 0
    question.innerText = quiz[plus].ques;
    choice1.innerText = quiz[plus].choice1;
    choice2.innerText = quiz[plus].choice2;
    choice3.innerText = quiz[plus].choice3;
    choice4.innerText = quiz[plus].choice4;


for (let k = 0; k < choice.length; k++) {
    choice[k].addEventListener("click",(e)=>{
        // alert("hi")
        // console.log();
        if (e.target.innerText === quiz[plus].ans) {
            if (quiz[plus].ans =1) {
                score++

                
            }
            // score++
            // reveal.style.display="block"
            console.log(score);
        }
        else{
            choice[k].removeEventListener
        }
        
    })
             
}


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
       

        // console.log(e.target);
        if (e.target.matches(".nxt")) {
            plus++
            if (plus == quiz.length-1) {
                
                check.style.display="block"
                nxt.style.display="none"
                prev.style.display="none"
    
            }
            // console.log(plus);
          
            question.innerText = quiz[plus].ques;
            choice1.innerText = quiz[plus].choice1;
            choice2.innerText = quiz[plus].choice2;
            choice3.innerText = quiz[plus].choice3;
            choice4.innerText = quiz[plus].choice4;
            reveal.style.display="none"
             reveal.innerText=""

        }

        else if(e.target.matches(".prev")){
            if (plus==0) {
                alert("This is the first question")
            }

        }
        
        else if(e.target.matches(".prev")){
            plus--
            question.innerText = quiz[plus].ques;
            choice1.innerText = quiz[plus].choice1;
            choice2.innerText = quiz[plus].choice2;
            choice3.innerText = quiz[plus].choice3;
            choice4.innerText = quiz[plus].choice4;
            reveal.style.display="none"
             reveal.innerText=""

        }
        else if (e.target.matches(".check")){
            total.innerText = score;
            main2.style.display="none"
            answers.style.display="block"



        }
      
    })

}




const start=document.querySelector("#start")
const openpage =document.querySelector('.starttag')

start.addEventListener("click",()=>{
    openpage.style.display="none"
})