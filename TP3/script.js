const champ = document.querySelector(".champ")
const password = document.querySelector('#text');
const btnCopy = document.querySelector('#copy');
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

function is_required() {
    if (taille.value === "") {
        tailleerror.style.visibility = "visible";
    }
}

function message_error() {
    if (parseInt(taille.value) < MIN) {
        tailleerror.innerHTML = `la taille minimale est ${MIN} !`
    }if (parseInt(taille.value) > MAX) {
        tailleerror.innerHTML = `la taille maximale est ${MAX} !`
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
        console.log("0 checked");
        error.style.visibility = "visible";
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
champ.addEventListener('click',function () {
    are_checked();
    if (parseInt(taille.value) >= 5 && parseInt(taille.value) <= 20) {
        console.log("taillebon");
        tailleerror.style.visibility = "hidden";
    } 
    if (checkeds.length !== 0 ) {
        console.log("checked");
        genere.disabled = false;
        error.style.visibility = "hidden";
    }  
    message_error();
    is_required();
})



genere.addEventListener('click',function () {
    passwordGenered = "";
    btnCopy.style.visibility = "visible";
    password_generator();
    password.innerHTML = passwordGenered;
    console.log(passwordGenered)
})