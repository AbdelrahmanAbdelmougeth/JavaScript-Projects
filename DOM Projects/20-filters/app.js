//That's a copy not referencing so be carefull always with it
let filtered_products = [...products];
const products_container = document.querySelector('.products-container');

function display_products() {
  if (filtered_products.length < 1) {
    products_container.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  products_container.innerHTML = filtered_products.map(({ id, title, image, price }) => {
    return ` <article class="product" data-id="${id}">
          <img
            src=${image}
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`
  }).join(' ');
}
display_products();

const form_input = document.querySelector('.input-form');
const search_input = document.querySelector('.search-input');
form_input.addEventListener('keyup', () => {
  const search_value = search_input.value;
  filtered_products = products.filter(product => {
    return product.title.toLowerCase().includes(search_value);
  })
  display_products();
})

const companies = document.querySelector('.companies');

const display_buttons = () => {
  const buttons = ['all', ...new Set(products.map((product) => product.company))];
  companies.innerHTML = buttons.map(button => {
    return `<button class="company-btn" data-id="${button}">${button}</button>`
  }).join('');
}
const cop = display_buttons();

companies.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filtered_products = [...products];
    } else {
      filtered_products = products.filter((product) => {
        return product.company === el.dataset.id;
      })
    }
    search_input.value = '';
    display_products();
  }
})