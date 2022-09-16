const dark_mode_toggle = document.querySelector('.btn');
console.log(dark_mode_toggle)
dark_mode_toggle.addEventListener('click', () => {
  //selecting the html
  document.documentElement.classList.toggle('dark-theme');
});

const dom_articles = document.querySelector('.articles');
console.log(dom_articles);
const loaded_articles = articles.map((article) => {
  // console.log(article);
  const { title, date, length, snippet } = article;
  const format_date = moment(date).format('MMMM Do, YYYY');
  return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${format_date}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
}).join('');
dom_articles.innerHTML = loaded_articles;
// console.log(articles)
