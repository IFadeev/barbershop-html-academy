window.addEventListener('load', function() {
  const loginLink = document.getElementById('login-link-id');
  const modalLogin = document.getElementById('modal-login-id');
  const modalClose = document.getElementById('modal-close-pop-id');
  const loginInput = modalLogin.querySelector('[name=login]');
  const passInput = modalLogin.querySelector('[name=password]');
  const storage = localStorage.getItem('login');
  const loginForm = document.querySelector('.login-form');
  

  loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    modalLogin.classList.toggle('modal-show');
    loginInput.focus();
    if (storage) {
      loginInput.value = storage;
    }

    loginForm.addEventListener('submit', function(e){
      if (!loginInput.value || !passInput.value) {
        e.preventDefault();
        alert('Нужно ввести и логин и пароль!');
      }
      else {
        localStorage.setItem('login', loginInput.value);
        e.preventDefault();
        console.log(localStorage.getItem('login'))
      };
    });

    
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      modalLogin.classList.remove('modal-show');
    });
  });
});






// var link = document.querySelector(".login-link");


//         var popup = document.querySelector(".modal-login");
//         var close = popup.querySelector(".modal-close");

//         var form = popup.querySelector("form");
//         var login = popup.querySelector("[name=login]");
//         var password = popup.querySelector("[name=password]");

//         var isStorageSupport = true;
//         var storage = "";

//         try {
//             storage = localStorage.getItem("login");
//         } catch (err) {
//             isStorageSupport = false;
//         }

//         link.addEventListener("click", function (evt) {
//             evt.preventDefault();
//             popup.classList.add("modal-show");

//             if (storage) {
//                 login.value = storage;
//                 password.focus();
//             } else {
//                 login.focus();
//             }
//         });

//         close.addEventListener("click", function (evt) {
//             evt.preventDefault();
//             popup.classList.remove("modal-show");
//             popup.classList.remove("modal-error");
//         });

//         form.addEventListener("submit", function (evt) {
//             if (!login.value || !password.value) {
//                 evt.preventDefault();
//                 popup.classList.remove("modal-error");
//                 popup.offsetWidth = popup.offsetWidth;
//                 popup.classList.add("modal-error");
//             } else {
//                 if (isStorageSupport) {
//                     localStorage.setItem("login", login.value);
//                 }
//             }
//         });

//         window.addEventListener("keydown", function (evt) {
//             if (evt.keyCode === 27) {
//                 evt.preventDefault();
//                 if (popup.classList.contains("modal-show")) {
//                     popup.classList.remove("modal-show");
//                     popup.classList.remove("modal-error");
//                 }
//             }
//         });