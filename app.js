const productionsItem = document.querySelectorAll('.productions__item')
productionsItem.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        productionsItem.forEach(el=>{ el.classList.remove('--active'); });
        item.classList.add('--active')
    })
})

