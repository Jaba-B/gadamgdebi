window.addEventListener('load', () => {
    const main = document.getElementById("app-container");
    const footer = document.querySelector(".app-footer");
    const section = document.createElement('section');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = "Join Our Program";
    const p = document.createElement('div');
    const str1 = document.createElement('p');
    str1.textContent = "Sed do eiusmod tempor incididunt";
    const str2 = document.createElement('p');
    str2.textContent = "ut labore et dolore magna aliqua.";
    const emailBox = document.createElement("form");
    const emailInput = document.createElement("input");
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email');
    const emailBtn = document.createElement('button');
    emailBtn.setAttribute('type', 'submit');
    emailBtn.textContent = "SUBSCRIBE"

    main.insertBefore(section, footer);
    section.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    p.appendChild(str1);
    p.appendChild(str2);
    div.appendChild(emailBox);
    emailBox.appendChild(emailInput);
    emailBox.appendChild(emailBtn);

    section.classList.add("added-section");
    div.classList.add('added-section__content');
    h2.classList.add('added-section__h2');
    p.classList.add('added-section__p');
    str1.classList.add('added-section__p-string');
    str2.classList.add('added-section__p-string');
    emailBox.classList.add("added-section__email-box");
    emailInput.classList.add('added-section__email-input');
    emailBtn.classList.add('added-section__email-btn');

    emailBtn.addEventListener('click', (enteredValue) => {
        enteredValue.preventDefault();
        console.log(enteredValue);
    }, false)

    const media = window.matchMedia('(max-width: 768px)');
    if (media.matches) {
        div.style.height = "300px";
        div.style.marginTop = "60px";

        emailBox.style.flexDirection = "column";
        emailBox.style.justifyContent = "center";
        emailBox.style.alignItems = "center";
        emailBtn.style.marginTop = "30px";
    }
});
