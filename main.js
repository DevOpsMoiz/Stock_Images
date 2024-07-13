let a = document.querySelector('#tab0')
let b = document.querySelector('#tab1')
let c = document.querySelector('#tab2')
let d = document.querySelector('#tab3')
let e = document.querySelector('#tab4')



let animals = document.querySelectorAll('#animals');
let nature = document.querySelectorAll('#nature');
let all = document.querySelectorAll('.all');
let vehicle = document.querySelectorAll('#vehicle');
let cosmetic = document.querySelectorAll('#cosmetic');


let filter_text = document.querySelectorAll('.tabs')
a.style.color = 'black';


let menu_bar = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-xmark');
let nav = document.querySelector('nav');
























a.addEventListener('click', () => {
    console.log(all)

    for (i = 0; i < all.length; i++) {
        all[i].style.display = 'flex';
    }
    for (i = 0; i < filter_text.length; i++) {
        filter_text[i].style.color = 'rgba(0, 0, 0, 0.4)';
    }
    a.style.color = 'black';

});

b.addEventListener('click', () => {
    console.log(nature)
    for (i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }
    for (i = 0; i < nature.length; i++) {
        nature[i].style.display = 'flex';

    }
    for (i = 0; i < filter_text.length; i++) {
        filter_text[i].style.color = 'rgba(0, 0, 0, 0.4)';
    }
    b.style.color = 'black';

});


c.addEventListener('click', () => {
    for (i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }
    for (i = 0; i < vehicle.length; i++) {
        vehicle[i].style.display = 'flex';

    }
    for (i = 0; i < filter_text.length; i++) {
        filter_text[i].style.color = 'rgba(0, 0, 0, 0.4)';
    }
    c.style.color = 'black';

});

d.addEventListener('click', () => {
    for (i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }
    for (i = 0; i < cosmetic.length; i++) {
        cosmetic[i].style.display = 'flex';

    }
    for (i = 0; i < filter_text.length; i++) {
        filter_text[i].style.color = 'rgba(0, 0, 0, 0.4)';
    }
    d.style.color = 'black';

});

e.addEventListener('click', () => {
    for (i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }
    for (i = 0; i < animals.length; i++) {
        animals[i].style.display = 'flex';

    }
    for (i = 0; i < filter_text.length; i++) {
        filter_text[i].style.color = 'rgba(0, 0, 0, 0.4)';
    }
    e.style.color = 'black';

});

