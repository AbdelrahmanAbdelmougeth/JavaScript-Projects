const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');


toggle.addEventListener('click',function(){
    // if(sidebar.classList.contains('show-sidebar'))
    //     sidebar.classList.remove('show-sidebar')
    // else
    //     sidebar.classList.add('show-sidebar')    
    sidebar.classList.toggle('show-sidebar')
})

closebtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})


