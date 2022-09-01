const colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", 
"lime", "maroon", "navy", "olive", "orange", "purple", "red", 
"silver", "teal", "white", "yellow",];

const btn = document.getElementById("btn");
const color_value = document.querySelector('.color_value');

btn.addEventListener("click",function(){
    const index = Math.floor(Math.random() * colors.length);
    
    document.body.style.backgroundColor = colors[index]
    color_value.textContent = colors[index];
});


