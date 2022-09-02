
const links = document.getElementsByClassName("links_list");
const toggle = document.getElementsByClassName("toggle");

links[0].classList.add("hide");
toggle[0].addEventListener('click', function(){
    if(links[0].classList.contains("hide"))
        links[0].classList.remove('hide')
    else
        links[0].classList.add('hide')    
})

// links.classList.add("hide")
console.log(links.classList)
console.log(links)
console.log(toggle)

