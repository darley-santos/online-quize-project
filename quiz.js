window.onload = function() {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "What is full form of RAM ?",
        answer: "Randon access Memory",
        options: [
            "Randon access Memory",
            "Randomely Access memory",
            "Run aceapt memory",
            "none of these"
        ]
    },
    {
        id: 2,
        question : "what is full form of CPU ?",
        answer: "central processing unit",
        options: [
            "central preload unit",
            "central program unit",
            "central processing unit",
            "none of these"
        ]
    },
    {
        id:3,
        question: "What is full form of e-mail",
        answer:"electronic mail",
        options: [
            "electric mail",
            "electronic mail",
            "electrician mail",
            "none of these",
        ]  
    },
    {
        id:4,
        question:"what is computer ?",
        answer: "electronic devise",
        options: [
            "desktop",
            "processor",
            "electronic devise",
            "none of these"
        ] 
    }
];




function submitForm(event)  {
    event.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    sessionStorage.setItem("name",name);
    location.href ="quiz.html";
}
let question_count=0;
let point=0;

function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if(user_answer == questions[question_count].answer)
    {
      point+=10;
      sessionStorage.setItem("points",point);
    }
    if(question_count == questions.length - 1)
    {
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }
    
    
    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");

    //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
question.innerHTML = `
<h2>Q${question_count+1}. ${questions[count].question}</h2>
     <ul class="option_group">

                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>
                `;
                toggleActive();

}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++)
    {
        option[i].onclick = function() {
            for(let j=0;j<option.length;j++)
            {
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}