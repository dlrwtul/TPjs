const container = document.querySelector('.container')
const addNew = document.querySelector('#addnew');

//=====================================================================

function createNote() {
    var newNote = document.createElement("div");
    newNote.className = "note";

    const entete = document.createElement("div");

    entete.className = "entete";


    const text = document.createElement("textarea");

    text.setAttribute("cols", "30");
    text.setAttribute("rows", "55");
    text.setAttribute("readonly", "");


    var span1 = document.createElement("span");
    var span2 = document.createElement("span");

    const img1 = document.createElement("img");
    const img2 = document.createElement("img");

    img1.setAttribute("src", "real edit.png");
    img2.setAttribute("src", "trash.png");


    img1.addEventListener('click', function() {
        var textes = text.value;
        text.removeAttribute("readonly");
        text.focus();
        text.style.backgroundColor =
            "rgb(230, 240, 243)"
        console.log('edited');
    })

    text.addEventListener('blur', function() {
        text.setAttribute("readonly", "");
        text.style.backgroundColor = "";
        console.log('blured');
    })


    span1.appendChild(img1);

    img2.addEventListener('click', function() {
        newNote.remove();
        console.log("deleted");
    })

    span2.appendChild(img2);

    entete.appendChild(span1);
    entete.appendChild(span2);

    newNote.appendChild(entete);
    newNote.appendChild(text);

    container.appendChild(newNote);
    console.log("finished!")

}

//=====================================================================

addNew.addEventListener('click', function() {
    createNote();
});