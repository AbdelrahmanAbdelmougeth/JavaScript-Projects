function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}


function Gallery(element){
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  //Getting the modal attributes
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  this.closeBtn = getElement('.close-btn');
  let self = this;

  this.closeModal = this.closeModal.bind(self);
  this.nextImage = this.nextImage.bind(self);
  this.prevImage = this.prevImage.bind(self);
  this.chooseImage = this.chooseImage.bind(self);

  //bind functions to get access to the gallery elements and methods
  this.container.addEventListener('click',function(e){
     if(e.target.classList.contains('img')){
      self.openModal(e.target,self.list);}
  });
}
Gallery.prototype.openModal = function(selectedImage,list){
  this.setMainImage(selectedImage);
  this.setImages(selectedImage,list);
  this.closeBtn.addEventListener('click',this.closeModal);
  this.nextBtn.addEventListener('click',this.nextImage);
  this.prevBtn.addEventListener('click',this.prevImage);
  this.modalImages.addEventListener('click',this.chooseImage);
  this.modal.classList.add('open');
}
Gallery.prototype.setMainImage = function(selectedImage){
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
}
Gallery.prototype.setImages = function (selectedImage,list){
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
    }).join('');
}
Gallery.prototype.nextImage = function(){
  const selected = this.modalImages.querySelector('.selected');
  const next = selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
  this.setMainImage(next);
};
Gallery.prototype.prevImage = function(){
  const selected = this.modalImages.querySelector('.selected');
  const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove('selected');
  prev.classList.add('selected');
  this.setMainImage(prev);
};
Gallery.prototype.chooseImage = function(e){
  if(e.target.classList.contains('modal-img')){
    const selected =this.modalImages.querySelector('.selected');
    selected.classList.remove('selected');
    this.setMainImage(e.target);
    e.target.classList.add('selected');
  }
}
Gallery.prototype.closeModal = function(){
  this.closeBtn.removeEventListener('click',this.closeModal);
  this.nextBtn.removeEventListener('click',this.nextImage);
  this.prevBtn.removeEventListener('click',this.prevImage);
  this.modalImages.removeEventListener('click',this.chooseImage);
  this.modal.classList.remove('open');
}

const city = new Gallery(getElement('.city'));
const nature = new Gallery(getElement('.nature'));
