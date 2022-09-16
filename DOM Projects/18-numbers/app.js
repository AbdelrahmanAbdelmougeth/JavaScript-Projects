const numbers = [...document.querySelectorAll('.number')];

const update_count = (number) => {
  const max_value = parseInt(number.dataset.value)
  const increment = Math.ceil(max_value / 1000);
  let initial_value = 0;

  const increase_count = setInterval(() => {
    initial_value += increment;
    if (initial_value >= max_value) {
      number.textContent = `${max_value}+`;
      clearInterval(increase_value);
      return;
    }
    number.textContent = `${initial_value}`;
  }, 1)
}

for (const number of numbers) {
  update_count(number);
}

// const items = [...document.querySelectorAll('.number')];

// const updateCount = (el) => {
//   const value = parseInt(el.dataset.value);
//   const increment = Math.ceil(value / 1000);
//   // const increment = 1;
//   let initialValue = 0;

//   const increaseCount = setInterval(() => {
//     initialValue += increment;

//     if (initialValue > value) {
//       el.textContent = `${value}+`;
//       clearInterval(increaseCount);
//       return;
//     }

//     el.textContent = `${initialValue}+`;
//   }, 1);
//   // console.log(increaseCount);
// };

// items.forEach((item) => {
//   updateCount(item);
// });
