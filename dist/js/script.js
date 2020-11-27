window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu-list'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger'),
    anchors = document.querySelectorAll('scroll');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu-list_active');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu-list_active');
        });
    });

    anchors.forEach( item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const test = document.getAttribute('href');

            test.scrollIntoView ({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });    
});

/* const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
} */