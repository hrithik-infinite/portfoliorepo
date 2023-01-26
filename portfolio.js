const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.container');
const about = document.querySelector('.about');
const testimonial = document.querySelector('.testimonialpart');
const test = document.querySelector('.set .test');
const image = document.querySelector('.outtest img');
const btnimg1 = document.querySelector('.chbtim1');
const btnimg2 = document.querySelector('.chbtim2');
const btnimg3 = document.querySelector('.chbtim3');
const btnimg4 = document.querySelector('.chbtim4');
const btnimg5 = document.querySelector('.chbtim5');

const optionproshot1 = document.querySelector('.optionproshot1');
const optionproshot2 = document.querySelector('.optionproshot2');
const optionproshot3 = document.querySelector('.optionproshot3');
const optionproshot4 = document.querySelector('.optionproshot4');
const optionproshot5 = document.querySelector('.optionproshot5');

const allproject = document.querySelector('.allproject');
const styling = document.querySelector('.styling');
const glassmorphism = document.querySelector('.glassmorphism');
const pure_js = document.querySelector('.pure_js');
const parallax = document.querySelector('.parallax');

hamburger.addEventListener('click',()=>{
    container.classList.toggle('active')
})
about.addEventListener('click',()=>{
    container.classList.remove('active')
})
let i=1;
setInterval(() => {
    image.src = `img${i+1}.jpg`;
    testimonial.style.marginLeft = `-${i * (test.offsetWidth / 5)}px`;
    switch(i){
        case 0:
            btnimg1.style.backgroundColor = '#fff';
            btnimg5.style.backgroundColor = '#eeeeee81';
            break;
        case 1:
            btnimg2.style.backgroundColor = '#fff';
            btnimg1.style.backgroundColor = '#eeeeee81';
            break;
        case 2:
            btnimg3.style.backgroundColor = '#fff';
            btnimg2.style.backgroundColor = '#eeeeee81';
            break;
        case 3:
            btnimg4.style.backgroundColor = '#fff';
            btnimg3.style.backgroundColor = '#eeeeee81';
            break;
        case 4:
            btnimg5.style.backgroundColor = '#fff';
            btnimg4.style.backgroundColor = '#eeeeee81';
            break;
    }
    i++;
    if(i==5){
        i=0;
    }
}, 3000);

optionproshot1.addEventListener('click',()=>{
    if(allproject.classList.contains('display')){
        allproject.classList.remove('display');
    }
    styling.classList.add('display');
    glassmorphism.classList.add('display');
    pure_js.classList.add('display');
    parallax.classList.add('display');
})
optionproshot2.addEventListener('click',()=>{
    if(styling.classList.contains('display')){
        styling.classList.remove('display');
    }
    allproject.classList.add('display');
    glassmorphism.classList.add('display');
    pure_js.classList.add('display');
    parallax.classList.add('display');
})
optionproshot3.addEventListener('click',()=>{
    if(glassmorphism.classList.contains('display')){
        glassmorphism.classList.remove('display');
    }
    allproject.classList.add('display');
    styling.classList.add('display');
    pure_js.classList.add('display');
    parallax.classList.add('display');
})
optionproshot4.addEventListener('click',()=>{
    if(pure_js.classList.contains('display')){
        pure_js.classList.remove('display');
    }
    allproject.classList.add('display');
    styling.classList.add('display');
    glassmorphism.classList.add('display');
    parallax.classList.add('display');
})
optionproshot5.addEventListener('click',()=>{
    if(parallax.classList.contains('display')){
        parallax.classList.remove('display');
    }
    allproject.classList.add('display');
    styling.classList.add('display');
    glassmorphism.classList.add('display');
    pure_js.classList.add('display');
})

const x = document.querySelectorAll('.about path') ;

for(let i=0;i<x.length;i++){
    console.log(`Letter ${i} is ${x[i].getTotalLength()}`);
}