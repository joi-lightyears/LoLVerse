const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper svg");
const totalSlides = document.querySelector(".total-slides")
const carouselChildrens = [...carousel.children];
let isDragging = false, 
    isAutoPlay = true, 
    currentSlide = 1,
    startX, startScrollLeft, timeoutId;


// lấy số thẻ hiển thị trên trong 1 màn hình
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// thêm số thẻ hiển thị vào đầu thẻ dựa vào số thẻ hiển thị trên màn hình
//  vd: ta có hàng thẻ 12345, và chỉ có 1 thẻ hiển thị trên màn hình
//  thì ta sẽ thêm một thẻ 5 vào đầu => 512345
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// tương tự với thẻ cuối 512345 => 5123451
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// total slides
totalSlides.textContent = carouselChildrens.length;

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// thêm sự kiện click vào 2 mũi tên
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(carousel.scrollLeft, firstCardWidth)
        carousel.scrollLeft += btn.id == "wrapper__arrowBtnLeft" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Lấy vị trí chuột khi bắt đầu kéo và cị trí scroll
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; 
    // cập nhật lại vị trí scroll khi chuột di chuyển
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const updateSliderPosition = () => {
    const currentSlideElement = document.querySelector(".current-slide");
    currentSlideElement.textContent = currentSlide;
    const cards = document.querySelectorAll(".card");
    // console.log(cards, currentSlide)
    if(currentSlide == cards.length - 2) {
        cards.forEach(card => card.classList.remove("slideActive"));
        cards[currentSlide].classList.add("slideActive");
        cards[0].classList.add("slideActive");
        return;
    }else if(currentSlide == 1) {
        cards.forEach(card => card.classList.remove("slideActive"));
        cards[currentSlide].classList.add("slideActive");
        cards[cards.length - 1].classList.add("slideActive");
        return;
    }
    cards.forEach(card => card.classList.remove("slideActive"));
    cards[currentSlide].classList.add("slideActive");

};
const infiniteScroll = () => {
    // console.log(carousel.scrollLeft, firstCardWidth)
    
    // nếu slider đang ở cuối thì chuyển về đầu
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    
    // nếu slider đang ở đầu thì chuyển về cuối
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    
    currentSlide = Math.round(carousel.scrollLeft / firstCardWidth) ;
    if(currentSlide > carouselChildrens.length) currentSlide = 1;
    else if(currentSlide === 0) currentSlide = carouselChildrens.length;
    // console.log(currentSlide)

    updateSliderPosition();

    // clear timeout để không bị lặp lại và tự động chạy lại khi không còn chuột hover
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
    // tự động chạy slider mỗi 2.5s
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    currentSlide = Math.floor(carousel.scrollLeft / firstCardWidth) ;
    if(currentSlide > carouselChildrens.length) currentSlide = 1;
    else if(currentSlide === 0) currentSlide = carouselChildrens.length;
    // console.log(currentSlide)

    updateSliderPosition();
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);