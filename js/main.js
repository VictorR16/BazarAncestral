function changeSection(sectionIn, sectionOut) {
    document.getElementById(sectionIn).style.display = 'block';
    document.getElementById(sectionOut).style.display = 'none';
    charging(false);
}

function createUserAccount() {
    let emailUser = document.getElementById('emailCA').value;
    let userName = document.getElementById('userNameCA').value;
    let passwordUser = document.getElementById('passCA').value;
    charging(true);


    auth.createUserWithEmailAndPassword(emailUser, passwordUser).then(function (data) {
        changeSection('containerElementsCASucefull', 'containerElementsCA');
        alert('Usuario creado');
        auth.currentUser.sendEmailVerification().then(function () {
            // Email sent.
            charging(false);
        }).catch(function (error) {
            // An error happened.
        });
    })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorMessage === "The email address is already in use by another account.") {
                alert("Ya existe una cuenta de usuario asociada a ese correo electrónico");
            }
        });

    return false;
}

function userLogin() {
    charging(true);
    let email = document.getElementById('emailLogin').value;
    let password = document.getElementById('passLogin').value;

    auth.signInWithEmailAndPassword(email, password).then(function () {
        changeSection('viewProducts', 'login');

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorMessage) {
            alert("Usuario o contraseña incorrecto.");
            charging(false);
        }



    });
    return false;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function charging(value) {
    if (value) {
        document.getElementById("screenLoading").style.display = "block";
    } else {
        document.getElementById("screenLoading").style.display = "none";
    }
}



function categorie(number) {
    let banner = document.getElementById("containerElementsVP");
    let categorie = document.getElementById("categorieName");
    let logo = document.getElementById("logoProducts");
    let menuBurger = document.getElementById("menuBurger");

    switch (number) {
        case 1:
            requestEspcificProduct(number);
            banner.style.backgroundColor = '#F4F1E1';
            categorie.innerHTML = "Todos";
            categorie.style.color = '#000000';
            logo.src = "img/Logo.png";
            menuBurger.src = "img/menuHamburguesa.png"
            break;
        case 2:
            requestEspcificProduct(number);
            banner.style.backgroundColor = '#6E5738';
            categorie.innerHTML = "Collares";
            categorie.style.color = '#6E5738';
            logo.src = "img/logoBlanco.png";
            menuBurger.src = "img/menuBurgerBlanco.png"
            break;
        case 3:
            requestEspcificProduct(number);
            banner.style.backgroundColor = '#17AF9C';
            categorie.innerHTML = "Aretas";
            categorie.style.color = '#17AF9C';
            logo.src = "img/logoBlanco.png";
            menuBurger.src = "img/menuBurgerBlanco.png"
            break;
        case 4:
            requestEspcificProduct(number);
            banner.style.backgroundColor = '#B62527';
            categorie.innerHTML = "Manillas";
            categorie.style.color = '#B62527';
            logo.src = "img/logoBlanco.png";
            menuBurger.src = "img/menuBurgerBlanco.png"
            break;
        case 5:
            requestEspcificProduct(number);
            banner.style.backgroundColor = '#D8A629';
            categorie.innerHTML = "Mochilas";
            categorie.style.color = '#D8A629';
            logo.src = "img/logoBlanco.png";
            menuBurger.src = "img/menuBurgerBlanco.png"
            break;
    }

}
