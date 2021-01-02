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

/*
    //Slider
    let i = 1;
    for(let li of slider.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    //конфигурация
    let width = 940; // ширина картинки
    let count = 3; // видимое количество изображений

    let list = slider.querySelector('ul');
    let listElems = slider.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    slider.querySelector('.portfolio__btn_prev').onclick = function() {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0);
        list.style.marginLeft = position + 'px';
    };

    slider.querySelector('.portfolio__btn_next').onclick = function() {
        // сдвиг вправо
        position -= width * count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
*/
});


//Отправка данных на сервер
function send (event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
}