const preloader = document.querySelector('.preloader');
window.addEventListener('load',function(){
  preloader.classList.add('hide-preloader');
})


btn = document.querySelector('.switch-btn');
video = document.querySelector('.video-container');

btn.addEventListener('click',function(){
  if(btn.classList.contains('slide'))
  {
    btn.classList.remove('slide');
    video.pause();
    return;
  }
  btn.classList.add('slide');
  video.play();
});