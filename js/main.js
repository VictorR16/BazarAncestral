function changeSection(sectionIn, sectionOut) {
    document.getElementById(sectionIn).style.display = 'block';
    document.getElementById(sectionOut).style.display = 'none';
}

function createUserAccount() {
    let emailUser = document.getElementById('emailCA').value;
    let userName = document.getElementById('userNameCA').value;
    let passwordUser = document.getElementById('passCA').value;


    auth.createUserWithEmailAndPassword(emailUser, passwordUser).then(function (data) {
        changeSection('containerElementsCASucefull', 'containerElementsCA');
        alert('Usuario creado');
        auth.currentUser.sendEmailVerification().then(function () {
            // Email sent.
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

function userLogin(){
    let email = document.getElementById('emailLogin').value;
    let password = document.getElementById('passLogin').value;

    auth.signInWithEmailAndPassword(email, password).then(function (){
        changeSection('viewProducts','login');

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      return false;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
