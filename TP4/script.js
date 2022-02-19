const questions = document.querySelector('.questions');
const radio = document.querySelector('.radio');
const divquestionnaire = document.querySelector('.questionnaire');
const divquestion = document.querySelector('.question');
const inputs = document.getElementsByName('reponse');
const reponselabels = document.getElementsByTagName('label');
const suivant = document.querySelector('#suivant');
var userreponse = "";
var score = 0;
var i = 0;

var questionnaires = [
    {
    question : "Qui a remporter la coupe d'Afrique 2022 ?" ,
    a : "Cameroun" ,
    b : "Algerie" ,
    c : "Senegal" ,
    d : "Egypte" ,
    correct : "c",
} , {
    question : "Quelle est la capitale du Senegal ?" ,
    a : "Dakar" ,
    b : "Diourbel" ,
    c : "Touba" ,
    d : "Saint Louis" ,
    correct : "a",
} , {
    question : "Qui est le Meilleur footballeur du Monde ?" ,
    a : "Messi" ,
    b : "CR7" ,
    c : "Sadio Mané" ,
    d : "Neymar" ,
    correct : "a",
} , {
    question : "Quelle est la Cryptomonnaie la plus chere ?" ,
    a : "Ethereum" ,
    b : "Bitcoin" ,
    c : "Dogecoin" ,
    d : "Litecoin" ,
    correct : "b",
} , {
    question : "QUI est le meilleur Basketteur du monde ?" ,
    a : "Curry" ,
    b : "Harden" ,
    c : "Wade" ,
    d : "Lebron" ,
    correct : "d",
}
];
console.log(inputs);
//=============================================================================================

function affiche_questionnaire(i) {
    if (suivant.innerHTML === "Rejouer") {
        suivant.innerHTML = "suivant"
        radio.style.display = "flex";
    }
    var questionnaire = questionnaires[i];
    divquestion.innerHTML = questionnaire['question'];

    const a = reponselabels[0];
    const b = reponselabels[1];
    const c = reponselabels[2];
    const d = reponselabels[3];

    a.innerHTML = questionnaire['a'];
    b.innerHTML = questionnaire['b'];
    c.innerHTML = questionnaire['c'];
    d.innerHTML = questionnaire['d'];

    suivant.setAttribute("disabled","");
}

function checker() {
    inputs.forEach(element => {
        if (element.checked) {
            userreponse = element.id;
            suivant.removeAttribute("disabled");
        }
    });
}

function remove_check() {
    inputs.forEach(element => {
        if (element.checked) {
            element.checked = false;
        }
    });
}



affiche_questionnaire(i);
//==============================================================================================

divquestionnaire.addEventListener('mouseover',function () {
    checker();
})

suivant.addEventListener('click',function () {
    suivant.setAttribute("disabled","");
    i++;
    if (i < questionnaires.length) {
        var questionnaire = questionnaires[i];
        if (userreponse === questionnaire['correct']) {
            score++;
        }
        userreponse = "";
        remove_check();
        affiche_questionnaire(i);
    }else {
        suivant.innerHTML = "Rejouer"
        radio.style.display = "none";
        suivant.removeAttribute("disabled");
        divquestion.innerHTML = `Vous avez trouver ${score} / ${questionnaires.length} questions.`;
        i = -1;
        score = 0;
        console.log("rejouer");
    }
})