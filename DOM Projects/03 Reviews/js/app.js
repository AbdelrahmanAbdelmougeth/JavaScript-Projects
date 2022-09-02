// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let counter = 0;

const image = document.querySelector('.img');
const name_ = document.querySelector('.name');
const job_title = document.querySelector('.job_title');
const info = document.querySelector('.info')

//Load the default review
window.addEventListener("DOMContentLoaded",function(){
    const item = reviews[counter];
    image.src = item.img;
    name_.textContent = item.name;
    job_title.textContent = item.job;
    info.textContent = item.text;
})

const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const which_btn = e.currentTarget.classList;

        next_btn(which_btn);
        prev_btn(which_btn);
        random_btn(which_btn);

        showPerson(counter);
    });
});

function next_btn(list){
    if(list.contains('next-btn'))
        counter++;
    counter = counter % reviews.length;
}
function prev_btn(list){
    if(list.contains('prev-btn'))
        counter--;
    if(counter < 0)
        counter = reviews.length - 1;        
}
function random_btn(list){
    if(list.contains('random-btn'))
        counter = Math.floor(Math.random() * reviews.length);
}

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  image.src = item.img;
  name_.textContent = item.name;
  job_title.textContent = item.job;
  info.textContent = item.text;
}


