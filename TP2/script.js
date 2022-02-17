const gauche = document.querySelector('.gauche');
const droite = document.querySelector('.droite');
const btnDroite = document.querySelector('#btn_droite');
const btnGauche = document.querySelector('#btn_gauche');

var items = ["Mon premier","Mon deuxieme","Mon troisieme","Mon quatrieme"];
var items2 = [];
var selected = [];
var selected2 = [];

//===================================================================================
function div_gauche() {
    items.forEach(element => {
        var paragraph = document.createElement('p');
        paragraph.innerHTML = element;
        paragraph.setAttribute("class",`pG`);
        paragraph.addEventListener('click',function () {
            paragraph.style.backgroundColor = "blue";
            paragraph.style.color = "white";
            btnDroite.disabled = false;
            selected.push(element);
        })
        gauche.appendChild(paragraph);
    });
}


function redirect_droite() {
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (selected.indexOf(element) !== -1) {
            items2.push(element);

            //delete elements after merge

            var elements = document.querySelectorAll('.pG');
            for (let a = 0; a < elements.length; a++) {
                var pancien = elements[a];
                if (pancien.innerHTML === element) {
                    gauche.removeChild(pancien);
                    selected.splice(selected.indexOf(element),1);
                    items.splice(items.indexOf(element),1)
                }
            }
        }
        
    }

    droite.innerHTML = "";
    items2.forEach(element => {
        var paragraph = document.createElement('p');
        paragraph.innerHTML = element;
        paragraph.setAttribute("class",`pD`);
        paragraph.addEventListener('click',function () {
            paragraph.style.backgroundColor = "blue";
            paragraph.style.color = "white";
            btnGauche.disabled = false;
            if (!selected2.includes(element)) {
                selected2.push(element)
            }
        })
        droite.appendChild(paragraph);
    });
}


function redirect_gauche() {
    for (let index = 0; index < items2.length; index++) {
        const element = items2[index];
        if (selected2.indexOf(element) !== -1) {
            items.push(element);

            //delete elements after merge

            var elements = document.querySelectorAll('.pD');
            for (let a = 0; a < elements.length; a++) {
                var pancien = elements[a];
                if (pancien.innerHTML === element) {
                    droite.removeChild(pancien);
                    selected2.splice(selected2.indexOf(element),1);
                    items2.splice(items2.indexOf(element),1)

                }
            }
        }
        
    }

    gauche.innerHTML = "";
    items.forEach(element => {
        var paragraph = document.createElement('p');
        paragraph.innerHTML = element;
        paragraph.setAttribute("class",`pG`);
        paragraph.addEventListener('click',function () {
            paragraph.style.backgroundColor = "blue";
            paragraph.style.color = "white";
            btnDroite.disabled = false;
            if (!selected.includes(element)) {
                selected.push(element)
            }
        })
        gauche.appendChild(paragraph);
    });
}


//===================================================================================
div_gauche();
btnDroite.addEventListener('click',function () {
    redirect_droite();
});

btnGauche.addEventListener('click',function () {
    redirect_gauche();
})