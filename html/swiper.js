const swips = document.querySelector('.swips');


const swipeCount = document.querySelectorAll('.swipe').length;


const prevButton = document.querySelector('.prev1');
const nextButton = document.querySelector('.next1');

let currentIndex = 0;


function goToSwipe(index) {
    if (index < 0) {
        index = swipeCount - 1;
    } else if (index >= swipeCount) {
        index = 0;
    }

    currentIndex = index;
    swips.style.transform = `translateX(${-index * 100}%)`;
}


prevButton.addEventListener('click', () => {
    goToSwipe(currentIndex - 1);
});


nextButton.addEventListener('click', () => {
    goToSwipe(currentIndex + 1);
});

function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            goToSwipe(currentIndex + 1);
        }, 3000);
    }
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    startAutoPlay();
    swiper.addEventListener('mouseenter', stopAutoPlay);
    swiper.addEventListener('mouseleave', startAutoPlay);

goToSwipe(0);