const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menu_container = document.querySelector('.section-center');
const btn_container = document.querySelector(".btn-container");

//Getting the categories and adding the buttons based on the categories
get_categories();
function get_categories(){
  let categories = menu.reduce(function(acc,curr){
    if(!acc.includes(curr.category))
      acc.push(curr.category);
    return acc;
  },["all"]);
  adding_btns_to_dom(categories);
}
function adding_btns_to_dom(categories){
  menu_category = creating_the_btn(categories);
  display_btns(menu_category)
}
function creating_the_btn(list_items){
  let menu_items = list_items.map(function(item){
      return `<button type="button" class="filter-btn" data-id=${item}>${item}</button>`
    })
  return menu_items;  
}
function display_btns(menu){
  btn_container.innerHTML = menu.join("")
}
/*end of adding the buttons*/ 

// Adding All Items to DOM Dynamically
window.addEventListener('DOMContentLoaded',function(){
   display_all_items();
})
function display_all_items(){
    let menu_items = creating_the_menu(menu);
    display_menu(menu_items)
}
function display_menu(menu){
  menu_container.innerHTML = menu.join("")
}
function creating_the_menu(list_items){
  let menu_items = list_items.map(function(item){
      return `<article class="menu-item">
          <img src=${item.img} alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
    })
  return menu_items;  
}
/*end of adding the buttons*/ 

/*Adding Items Based on Category*/ 
//Lestining to the buttons
const btns = document.querySelectorAll('.filter-btn');
btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
      const category = e.currentTarget.dataset.id;
      if(category == "all"){
        display_all_items();
      }
      else{  
      categorical_list = create_categorical_menu(category);
      html_menu = creating_the_menu(categorical_list);
      display_menu(html_menu);
      }
  });
})
function create_categorical_menu(category__){
   let categories = []
   for(i=0; i<menu.length; i++){
    if(menu[i].category == category__)
    categories.push(menu[i])
   }
   return categories
}
/*end of adding items based on*/ 