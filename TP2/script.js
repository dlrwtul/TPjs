const gauche = document.querySelector('.gauche');
const droite = document.querySelector('.droite');
var pG = gauche.childNodes;
var pD = droite.childNodes;
const btnDroite = document.getElementById('btn_droite');
const btnGauche = document.getElementById('btn_gauche');

console.log(pD);


var itemsGauche = ["Mon premier","Mon deuxieme","Mon troisieme","Mon quatrieme"];
var itemsDroite = [];
var compteurG = 0;
var compteurD = 0;
//=====================================================

function affichage_gauche() {
    itemsGauche.forEach(element => {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = element;
        paragraph.addEventListener('click' , function () {
            if (btnGauche.disabled === true) {
                if (paragraph.style.backgroundColor !== "blue") {
                    paragraph.style.backgroundColor = "blue";
                    paragraph.style.color = "white";
                    compteurG++
                } else {
                    paragraph.style.backgroundColor = "white";
                    paragraph.style.color = "black";
                    compteurG--;
                }
                if (compteurG !== 0) {
                    btnDroite.removeAttribute("disabled")
                } else {
                    btnDroite.setAttribute("disabled","");
                }
            }
            
        })
        gauche.appendChild(paragraph);
    }); 
    
}

function affichage_droite() {
    itemsDroite.forEach(element => {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = element;
        paragraph.addEventListener('click' , function () {
            if (btnDroite.disabled === true) {
                if (paragraph.style.backgroundColor !== "blue") {
                    paragraph.style.backgroundColor = "blue";
                    paragraph.style.color = "white";
                    compteurD++
                } else {
                    paragraph.style.backgroundColor = "white";
                    paragraph.style.color = "black";
                    compteurD--;
                }
                if (compteurD !== 0) {
                    btnGauche.removeAttribute("disabled")
                } else {
                    btnGauche.setAttribute("disabled","");
                } 
            }
            
        })
        droite.appendChild(paragraph);
    }); 
    
}

function move_droite() {
    if (compteurG > 0) {
        for (let index = 0; index < pG.length; index++) {
            const element = pG[index];
            if (element.style.backgroundColor === "blue") {
                itemsDroite.push(element.innerHTML);
                itemsGauche.splice(itemsGauche.indexOf(element.innerHTML),1);
                element.parentNode.removeChild(element);
                index--;
            }
        }
        if (pD.length !== 0) {
            pD.forEach(paragraphautre => {
                if (!itemsDroite.includes(paragraphautre.innerHTML)) {
                    itemsDroite.push(paragraphautre.innerHTML);
                }
            });
            droite.innerHTML = "";
        }
    }
    compteurG = 0;
    
}


function move_gauche() {
    if (compteurD > 0) {
        for (let index = 0; index < pD.length; index++) {
            const element = pD[index];
            if (element.style.backgroundColor === "blue") {
                itemsGauche.push(element.innerHTML);
                itemsDroite.splice(itemsDroite.indexOf(element.innerHTML),1);
                element.parentNode.removeChild(element);
                index--;
            }
        }
        if (pG.length !== 0) {
            pG.forEach(paragraphautre => {
                if (!itemsGauche.includes(paragraphautre.innerHTML)) {
                    itemsGauche.push(paragraphautre.innerHTML);
                }
            });
            gauche.innerHTML = "";
        }

    }
    compteurD = 0;
}



affichage_gauche();
//===============================================

btnDroite.addEventListener('click' , function () {
    move_droite();
    affichage_droite();
    btnDroite.setAttribute("disabled","");

});

btnGauche.addEventListener('click' , function () {
    move_gauche();
    affichage_gauche();
    btnGauche.setAttribute("disabled","");

});
