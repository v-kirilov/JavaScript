async function lockedProfile() {
    let containerEl = document.getElementById('container');
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let count = 1;

    let persons = Object.values(data);

    for (const person of persons) {
        console.log(person.username);
        let mainEl = document.createElement('main');
        mainEl.id = 'main';

        let mainDiv = create('div', 'profile');

        let imgElement = create('img', 'userIcon');
        imgElement.src = './iconProfile2.png';

        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';

        let lockButton = document.createElement('input');
        lockButton.name = 'user' + count + 'Locked';
        lockButton.value = 'lock';
        lockButton.type = 'radio';
        lockButton.checked = true;

        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';

        let unlockButton = document.createElement('input');
        unlockButton.name = 'user' + count + 'Locked';
        unlockButton.value = 'unlock';
        unlockButton.type = 'radio';
        unlockButton.checked = false;

        let hrElement = document.createElement('hr');

        let userNameLabel = document.createElement('label');
        userNameLabel.textContent = 'Username';

        let userName = document.createElement('input');
        userName.type = 'text';
        userName.value = person.username;
        userName.name = 'user' + count + 'Username';
        userName.disabled = true;
        userName.readOnly = true;

        let divTwo = create('div', 'user1Username')

        let hrElementTwo = document.createElement('hr');
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';

        let emailInputElement = document.createElement('input');
        emailInputElement.type = 'email';
        emailInputElement.value = person.email;
        emailInputElement.name = 'user' + count + 'Email';
        emailInputElement.disabled = true;
        emailInputElement.readOnly = true;

        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';

        let ageInputElement = document.createElement('input');
        ageInputElement.type = 'email';
        ageInputElement.value = person.age;
        ageInputElement.name = 'user' + count + 'Age';
        ageInputElement.disabled = true;
        ageInputElement.readOnly = true;

        let showButton = document.createElement('button');
        showButton.textContent = 'Show more';



        divTwo.appendChild(hrElementTwo);
        divTwo.appendChild(emailLabel);
        divTwo.appendChild(emailInputElement);
        divTwo.appendChild(ageLabel);
        divTwo.appendChild(ageInputElement);
        divTwo.style.display = 'none';

        mainDiv.appendChild(imgElement);
        mainDiv.appendChild(lockLabel);
        mainDiv.appendChild(lockButton);
        mainDiv.appendChild(unlockLabel);
        mainDiv.appendChild(unlockButton);
        mainDiv.appendChild(hrElement);
        mainDiv.appendChild(userNameLabel);
        mainDiv.appendChild(userName);
        mainDiv.appendChild(divTwo);
        mainDiv.appendChild(showButton);

        mainEl.appendChild(mainDiv);
        containerEl.appendChild(mainEl);
        count++;

        showButton.addEventListener('click', () => {
            if (unlockButton.checked == true) {
                if (showButton.textContent == 'Show more') {
                    divTwo.style.display = 'block';
                    showButton.textContent = 'Hide it'
                } else {
                    divTwo.style.display = 'none';
                    showButton.textContent = 'Show more'
                }
            } else {

            }
        });
    }
}

function create(type, clas, content) {
    let element = document.createElement(type);
    element.classList.add(clas);
    element.textcontent = content;
    return element;
}