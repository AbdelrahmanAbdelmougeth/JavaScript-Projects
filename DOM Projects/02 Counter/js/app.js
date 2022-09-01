let count = 0;

const btns = document.querySelectorAll('.btn');
const number = document.getElementById('number');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const which_btn = e.currentTarget.classList;
        console.log(which_btn);
        if(which_btn.contains('increase'))
            count++;
        if(which_btn.contains('decrease'))
            count--;
        if(which_btn.contains('reset'))
            count=0;

        change_color();
        number.textContent = count;
    });
});

function change_color(){
    if(count > 0)
        number.style.color = "green";
    if(count < 0)
        number.style.color = "red";
    if(count == 0)
        number.style.color = "#222";
}

