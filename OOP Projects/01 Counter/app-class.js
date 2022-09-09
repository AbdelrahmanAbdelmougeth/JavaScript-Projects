function get_element(selection){
  const element = document.querySelector(selection);
  if(element)
    return element;
  throw new Error(`Please Check ${selection} Exists`)
}

class Counter{
  constructor(element,value){
    this.counter = element;
    this.value = value;
    this.value_dom = element.querySelector('.value');
    this.value_dom.textContent = this.value;
    this.reset_btn = element.querySelector('.reset');
    this.increase_btn = element.querySelector('.increase');
    this.decrease_btn = element.querySelector('.decrease');
    // bind this to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increase_btn.addEventListener('click', this.increase);
    this.decrease_btn.addEventListener('click', this.decrease);
    this.reset_btn.addEventListener('click', this.reset);
  }
  increase(){
     this.value++;
     this.value_dom.textContent = this.value;
  }
  decrease(){
     this.value--;
     this.value_dom.textContent = this.value;
  }
  reset(){
     this.value = 0;
     this.value_dom.textContent = this.value;
  }
}

const first_counter = new Counter(get_element('.first-counter'),1000);
const second_counter = new Counter(get_element('.second-counter'),0);

console.log(first_counter)
