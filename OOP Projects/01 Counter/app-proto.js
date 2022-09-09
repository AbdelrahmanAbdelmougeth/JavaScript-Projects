
function get_element(selection){
  const element = document.querySelector(selection);
  if(element)
    return element;
  throw new Error(`Please Check ${selection} Exists`)
}

function Counter(element,value){
  this.counter = element;
  this.value = value;
  this.value_dom = element.querySelector('.value');
  this.value_dom.textContent = this.value;
  this.reset_btn = element.querySelector('.reset');
  this.increase_btn = element.querySelector('.increase');
  this.decrease_btn = element.querySelector('.decrease');

  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increase_btn.addEventListener('click', this.increase);
  this.decrease_btn.addEventListener('click', this.decrease);
  this.reset_btn.addEventListener('click', this.reset);

  // this.increase_btn.addEventListener('click', this.increase.bind(this));
  // this.reset_btn.addEventListener('click', this.reset.bind(this));
  // this.decrease_btn.addEventListener('click', this.decrease.bind(this));
}
Counter.prototype.increase = function(){
    this.value++;
    this.value_dom.textContent = this.value;
}
Counter.prototype.reset = function(){
    this.value = 0;
    this.value_dom.textContent = this.value;
}
Counter.prototype.decrease = function(){
    this.value--;
        this.value_dom.textContent = this.value;

}

const first_counter = new Counter(get_element('.first-counter'),1000);
const second_counter = new Counter(get_element('.second-counter'),0);


