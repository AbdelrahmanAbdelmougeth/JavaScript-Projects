const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';


/*using async/await */
btn.addEventListener('click',async ()=>{
  try {
    const data = await fetch(URL);
    const json_joke = await data.json();
    display_a_joke(json_joke);
  } catch (error) {
    console.log(error);
  }
});

function display_a_joke({ value: joke }) {
  content.textContent = joke;
}


/*using fetch*/ 
/*btn.addEventListener('click', () => {
  fetch(URL)
    .then(data => data.json())
    .then(json_joke => display_a_joke(json_joke))
    .catch(err => console.log(err));
});

function display_a_joke({ value: joke }) {
  content.textContent = joke;
}*/



/*Using Promises*/
/*
btn.addEventListener('click', () => {
  get_a_joke(URL)
    .then((response) => display_a_joke(response))
    .catch(err => console.log(err));
});

function get_a_joke(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return;
      if (xhr.readyState === 4 && xhr.status === 200) resolve(xhr.responseText);
      else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    }
  });
}

function display_a_joke(json_joke) {
  const { value: joke } = JSON.parse(json_joke);
  content.textContent = joke;
}*/



/*
//using xhr
btn.addEventListener('click', () => {
  get_a_joke(URL);
})

function get_a_joke(URL) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // const data = JSON.parse(xhr.responseText);
      // content.innerHTML = data.value;
      //or using destructuring
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  }
}
*/

// btn.addEventListener('click', async () => {
//   try {
//     const data = await fetch(URL);
//     const response = await data.json();
//     displayData(response);
//   } catch (error) {
//     console.log(error);
//   }
// });

// function displayData({ value: joke }) {
//   img.classList.add('shake-img');
//   // const { value: joke } = data;
//   content.textContent = joke;
//   const random = Math.random() * 1000;
//   setTimeout(() => {
//     img.classList.remove('shake-img');
//   }, random);
// }
