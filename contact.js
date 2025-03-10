// code forma nachinetsya

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-item');
    const body = document.body;

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });


    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
});

const url = "https://script.google.com/macros/s/AKfycbwNMa4bklFXuXKfXnlkQa7HWsUtBGZ7kFfByEVm6g2wBqQVWkeWQi6Dd_oCio7e6MxA/exec";

    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let formData = new FormData(this);

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                alert("Форма успешно отправлена!"); 
                this.reset();
                document.getElementById("success-message").style.display = "block";  
                setTimeout(() => {
                    document.getElementById("success-message").style.display = "none";
                }, 3000);
            }
        })
        .catch(error => console.error('Ошибка отправки:', error));
    });

    
    const populateDatalists = (id, arr) => {
        let result = arr.map(item => `<option value="${item}">`).join('');
        document.getElementById(id).innerHTML = result;
    };
    fetch(`${url}?header=Customer`)
        .then(response => response.json())
        .then(({ data }) => populateDatalists("customers", data))
        .catch(error => console.error('Ошибка загрузки Customer:', error));

    fetch(`${url}?header=Phone`)
        .then(response => response.json())
        .then(({ data }) => populateDatalists("numbers", data))
        .catch(error => console.error('Ошибка загрузки Phone:', error));

    fetch(`${url}?header=Address`)
        .then(response => response.json())
        .then(({ data }) => populateDatalists("clothes", data))
        .catch(error => console.error('Ошибка загрузки Address:', error));

    document.querySelectorAll('input, textarea').forEach((element) => {
        element.addEventListener('focus', function () {
            this.dataset.placeholder = this.placeholder;
            this.placeholder = '';
        });

        element.addEventListener('blur', function () {
            if (!this.value) {
                this.placeholder = this.dataset.placeholder;
            }
        });
    });