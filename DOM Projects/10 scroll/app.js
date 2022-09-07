// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const links_container = document.querySelector('.links-container');
const nav_toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

nav_toggle.addEventListener('click',function(){
    // links_container.classList.toggle("show-links");
    const links_height = links.getBoundingClientRect().height;
    const links_container_height = links_container.getBoundingClientRect().height;

    if(links_container_height === 0)
    {
        links_container.style.height = `${links_height}px`;
        return;
    }
    links_container.style.height = `0`;
})


// ********** fixed navbar ************
const nav = document.getElementById('nav');
const top_link = document.querySelector('.top-link');

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > nav.getBoundingClientRect().height)
    {
        nav.classList.add('fixed-nav');
        return;
    }
    nav.classList.remove('fixed-nav');
})

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 500)
    {
        top_link.classList.add('show-link');
        return;
    }
    top_link.classList.remove('show-link');
})



// ********** smooth scroll ************
const scroll_links = document.querySelectorAll('.scroll-link');
const navbar = document.getElementById("nav");
scroll_links.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault(); //stop the default scroll
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        
        const nav_height = navbar.getBoundingClientRect().height;
        const links_container_height = links_container.getBoundingClientRect().height;
        const fixed_nav = nav.classList.contains('fixed-nav');

        let position = element.offsetTop - nav_height;
        
        if(!fixed_nav)  
            position = position - nav_height;
        if(nav_height > 82)
            position = position + links_container_height; 
        
            console.log(position);
        window.scrollTo({
            left:0,
            top:position,
        })
        links_container.style.height = `0`;
    })
})

// calculate heights
