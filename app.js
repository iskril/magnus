const productionsItem = document.querySelectorAll('.productions__item')
productionsItem.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        productionsItem.forEach(el=>{ el.classList.remove('--active'); });
        item.classList.add('--active')
    })
});
const burger = document.querySelector('.nav__burger');
const navigation = document.querySelector('.nav__list');

burger.addEventListener('click', function(e) {
    burger.classList.toggle('_active');
});

const call = documetn.querySelector('footer__contacts-button')

call.classList.add()
