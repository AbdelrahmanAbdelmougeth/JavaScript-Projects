const colors = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','f'];

const btn = document.getElementById("btn");
const color_value = document.querySelector('.color_value');

btn.addEventListener("click",function(){
    let generated_color = "#";
    for(let i=1; i<7; i++){
        const index = Math.floor(Math.random() * colors.length);
        generated_color += colors[index];
    }
    document.body.style.backgroundColor = generated_color;
    color_value.textContent = generated_color;
});
