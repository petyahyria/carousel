const images = document.querySelectorAll(".img");
const dots = document.querySelectorAll(".dot");
const dotsDiv = document.querySelector(".dots")

const nextBtn = document.querySelector("#right");
const previousBtn = document.querySelector("#left");

let indexActive = 0;

const nextImg = () =>{
    for (let i = indexActive; i<images.length; i++) {
        if(images[i].classList.contains("img-active")){
            indexActive = i+1;
        }
        images[i].classList.remove("img-active");
        dots[i].classList.remove("dot-active");
    }
    indexActive = indexActive > images.length-1 ? 0 : indexActive; 
    images[indexActive].classList.add("img-active");
    dots[indexActive].classList.add("dot-active");
}

const previousImg = () =>{
    for (let i = indexActive; i>=0; i--) {
        if(images[i].classList.contains("img-active")){
            indexActive = i-1;
        }
        images[i].classList.remove("img-active");
        dots[i].classList.remove("dot-active");
    }
    indexActive = indexActive < 0 ? images.length-1 : indexActive; 
    images[indexActive].classList.add("img-active");
    dots[indexActive].classList.add("dot-active");
}

dotsDiv.addEventListener("click", (e)=>{
    const target = e.target;
        if(!isNaN(+target.dataset.btn)){
            for (let i = 0; i<images.length; i++) {
            images[i].classList.remove("img-active");
            dots[i].classList.remove("dot-active");
            }
            indexActive = +target.dataset.btn - 1;
            images[indexActive].classList.add("img-active");
            dots[indexActive].classList.add("dot-active");
        }
});

nextBtn.addEventListener("click", nextImg);
previousBtn.addEventListener("click", previousImg);
setInterval(nextImg, 5000);