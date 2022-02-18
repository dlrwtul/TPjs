const gauche = document.querySelector('.gauche');
const droite = document.querySelector('.droite');
const btnDroite = document.querySelector('#btn_droite');
const btnGauche = document.querySelector('#btn_gauche');

var items = ["Mon premier","Mon deuxieme","Mon troisieme","Mon quatrieme"];
var selected = [];
var items2 = [];
var selected2 = [];
//===================================================================================

function affiche_element(items,parent,selected,btn) {
    items.forEach(element => {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = element;
        paragraph.addEventListener('click',function () {
            if (paragraph.style.backgroundColor !== "blue") {
                selected.push(element);
                paragraph.style.backgroundColor = "blue";
                paragraph.style.color = "white";
            } else {
                if (selected.includes(element)) {
                    selected.splice(selected.indexOf(element),1);
                }
                paragraph.style.backgroundColor = "white";
                paragraph.style.color = "black";
            }
            dis_en_able(selected,btn)
        })
        parent.appendChild(paragraph);
    });
}

function dis_en_able(selected,btn) {
    if (selected.length !== 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function delete_elements(selected,items,parent) {
    selected.forEach(element => {
        items.splice(items.indexOf(element),1)
        var elements = parent.childNodes;
        elements.forEach(element => {
            if (selected.includes(element.innerHTML)) {
                parent.removeChild(element)
            }
        });
    });
}

function move_droite() {
    droite.innerHTML = "";
    items2 = items2.concat(selected);
    items2 = [...new Set(items2)];
    delete_elements(selected,items,gauche);
    items.forEach(element => {
        if (!selected.includes(element)) {
            selected.splice(selected.indexOf(element),1)
        }
    });
    affiche_element(items2,droite,selected2,btnGauche);
    btnDroite.disabled = true;
}

function move_gauche() {
    gauche.innerHTML = "";
    items = items.concat(selected2);
    items = [...new Set(items)];
    delete_elements(selected2,items2,droite);
    items2.forEach(element => {
        if (!selected2.includes(element)) {
            selected2.splice(selected2.indexOf(element),1)
        }
    });
    affiche_element(items,gauche,selected,btnDroite);
    btnGauche.disabled = true;
}

//===================================================================================
affiche_element(items,gauche,selected,btnDroite);
btnDroite.addEventListener('click',function () {
    move_droite();
})

btnGauche.addEventListener('click',function () {
    move_gauche();
})





























/* var items2 = [];
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
                var pToDelete = elements[a];
                if (pToDelete.innerHTML === element) {
                    gauche.removeChild(pToDelete);
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
                var pToDelete = elements[a];
                if (pToDelete.innerHTML === element) {
                    droite.removeChild(pToDelete);
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
}) */