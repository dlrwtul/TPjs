const champ = document.querySelector(".champ")
const password = document.querySelector('#password');
password.setAttribute("readonly","")
const btnCopy = document.querySelector('#btn_copy');
const taille = document.getElementById('taille');
const maj = document.getElementById('maj');
const min = document.getElementById('min');
const nbr = document.getElementById('nbr');
const spe = document.getElementById('spe');
const genere = document.querySelector('#btn');
const tailleerror = document.querySelector(".tailleerror");
const error = document.querySelector(".error");
var chars = "";
var passwordGenered = "";

var checkbox = [maj,min,nbr,spe];
var checkeds = [];

const MAJ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MINU = 'abcdefghijklmnopqrstuvwxyz';
const NBR = '0123456789';
const SPE = "!#$%&?@";

const MIN = 5;
const MAX = 20

//===================================================================

function message_error() {
    if (parseInt(taille.value) < MIN) {
        tailleerror.innerHTML = `la taille minimale est ${MIN} !`
    }
    if (parseInt(taille.value) > MAX) {
        tailleerror.innerHTML = `la taille maximale est ${MAX} !`
    }
    if (taille.value === "") {
        tailleerror.style.visibility = "visible";
    } 
    if (!Number.isInteger(taille.value)) {
        tailleerror.innerHTML = `Veuillez entrer un nombre compris entre ${MIN} et ${MAX} !`
    }
}

function are_checked() {
    checkbox.forEach(element => {
        if (element.checked) {
            checkeds.push(element);
            switch (element) {
                case maj:
                    chars += MAJ;
                    break;
                case min:
                    chars += MINU;
                    break;
                case nbr:
                    chars += NBR;
                    break;
                default:
                    chars += SPE;
                    break;
            }
        }
    });
    if (checkeds.length === 0) {
        error.style.visibility = "visible";
    }else {
        genere.disabled = false;
        error.style.visibility = "hidden";
    }

}


function password_generator() {
    var Length = chars.length;
    for ( var i = 0; i < parseInt(taille.value); i++ ) {
      passwordGenered += chars.charAt(Math.floor(Math.random() * 
        Length));
    }
}

//===================================================================
champ.addEventListener("mouseover",function () {
    checkeds = [];
    are_checked();
    message_error();
    if (parseInt(taille.value) >= 5 && parseInt(taille.value) <= 20) {
        tailleerror.style.visibility = "hidden";
    }else {
        btnCopy.style.visibility = "hidden";
        password.innerHTML = "";
        tailleerror.style.visibility = "visible";
    }
})



genere.addEventListener('click',function () {
    
    if (parseInt(taille.value) >= 5 && parseInt(taille.value) <= 20 && checkeds.length !== 0) {
        passwordGenered = "";
        btnCopy.style.visibility = "visible";
        password_generator();
        password.value = passwordGenered;
        btnCopy.addEventListener('click',function () {
            password.select();
            navigator.clipboard.writeText(password.value);
            btnCopy.innerHTML = "copied"
            setTimeout(function () {
                btnCopy.innerHTML = "copy"
            },3000);
        })
    } else {
        are_checked();
        message_error();
    }
})