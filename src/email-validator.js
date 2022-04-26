export const validator = setTimeout(()=> {
    let parent = document.getElementById('app-container');
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
            
        } else {
            
        }
    }, false);
}, 1000);
