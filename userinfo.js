const nameInput = document.querySelector('.nameInput');
const nameInput1 = document.querySelector('.nameInput1');
const nameViewer = document.querySelector('.name-viewer');
const surnameViewer = document.querySelector('.surname-viewer');
const passViewer = document.querySelector('.pass-viewer');
const surnameInput = document.querySelector('.surnameInput');
const passwordInput = document.querySelector('.passwordInput');
const passwordInput1 = document.querySelector('.passwordInput1');
const submitBtn = document.querySelector('.submitButton');
const submitBtn1 = document.querySelector('.submitButton1');
const checkBtn = document.querySelector('.checkButton');
const formInput = document.querySelector('.form');
const infoWrapper = document.querySelector('.info-wrapper');
const infoWrapperr = document.querySelector('.info-wrapperr');
const infoWrapperrr = document.querySelector('.info-wrapperrr')
const userName = nameInput.value;
const usersurName = surnameInput.value;
const userPass = passwordInput.value;
let userDetails = JSON.parse(localStorage.getItem('userDetails')) || {
        "name": nameInput.value,
        "lastName": surnameInput.value,
        "password": passwordInput.value
      };

      submitBtn.addEventListener('click', () => {

        userDetails = {
          "name": nameInput.value,
          "lastName": surnameInput.value,
          "password": passwordInput.value
        };

        if(nameInput.value === ''){
          nameInput.classList.add('empty-column');
        } else if(surnameInput.value === '') {
          surnameInput.classList.add('empty-column');
        } else if(passwordInput === '') {
          passwordInput.classList.add('empty-column')
        } else {
          localStorage.setItem('userDetails', JSON.stringify(userDetails));

        }
        
        
      });
      checkBtn.addEventListener('click', () => {
        console.log(userDetails = JSON.parse(localStorage.getItem('userDetails')));
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
          infoWrapper.classList.add('hide');
          infoWrapperr.classList.remove('hide');
      });
      submitBtn1.addEventListener('click', () => {
        userDetails = JSON.parse(localStorage.getItem('userDetails'))
        if(nameInput1.value === 'Kim' && passwordInput1.value === '@YeezyIsKing999') {
          infoWrapperr.classList.add('hide');
          infoWrapperrr.classList.remove('hide');
          nameViewer.textContent = userDetails.name;
          surnameViewer.textContent = userDetails.lastName;
          passViewer.textContent = userDetails.password;
        } else if(nameInput1.value === '') {
          nameInput1.classList.add('empty-column');
        } else if(passwordInput1.value === '') {
          passwordInput1.classList.add('empty-column');
        }
        
      });
      window.onload = () => {
        infoWrapperr.classList.add('hide');
        infoWrapperrr.classList.add('hide');
      };
      