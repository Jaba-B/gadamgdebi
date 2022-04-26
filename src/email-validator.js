export const validator = setTimeout(()=> {
    let parent = document.getElementById('app-container');
    let form = parent.children[4].children[0].children[2];
    let btn = parent.children[4].children[0].children[2].children[1];
    let input = parent.children[4].children[0].children[2].children[0];
    btn.addEventListener('click', () => {
        const validEmailEndings = ['gmail.com', 'outlook.com', 'yandex.ru'];
        const email = input.value;
        const ending = email.substring(email.indexOf('@') + 1);
        const start = email.substring(0,email.indexOf('@'));
        if(ending === validEmailEndings[0] && start.length > 0 
            || ending === validEmailEndings[1] && start.length > 0 
            || ending === validEmailEndings[2] && start.length > 0) {
            localStorage.setItem('email', email);
            if(btn.innerHTML == 'SUBSCRIBE') {
                input.style.display = 'none';
                btn.style.height = '42px';
                btn.innerHTML = 'UNSUBSCRIBE';
                form.style.justifyContent = 'center';
            } else {            
                input.style.display = 'inline-block';
                btn.style.height = '42px';
                btn.innerHTML = 'SUBSCRIBE';
                form.style.justifyContent = 'space-between';
                localStorage.removeItem('email');
                input.value = '';
            }
        } else {
            alert('false');
        }
        const emailInput = document.querySelector('added-section__email-btn');
        emailInput.style.display = 'none';
    }, false);
}, 1000);
