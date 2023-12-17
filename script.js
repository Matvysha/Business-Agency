//Navbar
const menu = document.querySelector('.menu'),
     navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
//End of Navbar
//Section 2 Video
const video = document.querySelector('.video'),
    btn = document.querySelector('.buttons i'),
    bar = document.querySelector('.video-bar')

const PlayPause = () => {
    if(video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '0.7'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '0.3'
    }
  
}

btn.addEventListener('click', () => {
    PlayPause()
})

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '0.3'
    }
})
//End of Section 2 Video
//Section 3 Swiper Cards
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
});
//End of Section 3 Swiper Cards