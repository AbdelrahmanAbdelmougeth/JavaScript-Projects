
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
  //Here I used the bubbling to get the event
  question.addEventListener('click',function(e){
    const question_target = e.currentTarget;
    question_target.classList.toggle("show-text");

    //remove the class from all others except the target one
    questions.forEach(function (item) {
      if (item !== question_target) {
        item.classList.remove("show-text");
      }
    });
  })
})

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//   btn.addEventListener('click',function(e){
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.add("show-text");

//     console.log(question)
//   })
// })
