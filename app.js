var panadol = {
    name: "Panadol Box",
    description: "Panadol relieves fever and treats various types of mild to moderate pain.",
    image: "Images/pandol.avif",
    price: 250
};

var brufen = {
    name: "Brufen",
    description: "BRUFEN relieves pain and reduces inflammation (swelling, redness or soreness).",
    image: "Images/Brufen.png",
    price: 250
};

var entamizole = {
    name: "Entamizole",
    description: "Used for the diagnosis or treatment of antibiotic associated colitis, anaerobic infections.",
    image: "Images/Entamizole.png",
    price: 250
};

var flagyl = {
    name: "Flagyl",
    description: "Metronidazole is an antibiotic that is used to treat a wide variety of infections.",
    image: "Images/Flagyl.png",
    price: 250
};

var risek = {
    name: "Risek 40",
    description: "Risek Insta contains immediate-release formulation of omeprazole and sodium bicarbonate.",
    image: "Images/Risek.png",
    price: 250
};

var imodium = {
    name: "Imodium",
    description: "The solution works by slowing your overactive bowel. Decrease the # of bowel movements.",
    image: "Images/Imodium.png",
    price: 250
};

var novidat = {
    name: "Novidat",
    description: "Novidat tablet contains ciprofloxacin in it which is a quinolone antibiotic.",
    image: "Images/Novidat.png",
    price: 250
};

var myteka = {
    name: "Myteka",
    description: "This medicine is used to control and prevent symptoms caused by asthma.",
    image: "Images/Myteka.png",
    price: 250
};

function updateMedicineCard(id, medicine) {
    var parentDiv = document.getElementById(id);
    if (!parentDiv) return;
    var img = parentDiv.getElementsByTagName('img')[0];
    img.setAttribute("src", medicine.image);
    var cardBody = parentDiv.getElementsByClassName('card-body')[0];
    var cardTitle = cardBody.getElementsByClassName('card-title')[0];
    cardTitle.innerText = medicine.name;
    var cardText = cardBody.getElementsByClassName('card-text')[0];
    cardText.innerText = medicine.description;
    var cardPrice = cardBody.getElementsByTagName('h5')[1];
    if (!cardPrice) {
        cardPrice = document.createElement('h5');
        cardBody.appendChild(cardPrice);
    }
    cardPrice.innerText = "Rs: " + medicine.price;
}

updateMedicineCard('Panadol', panadol);
updateMedicineCard('Brufen', brufen);
updateMedicineCard('Entamizole', entamizole);
updateMedicineCard('Flagyl', flagyl);
updateMedicineCard('Risek', risek);
updateMedicineCard('Imodium', imodium);
updateMedicineCard('Novidat', novidat);
updateMedicineCard('Myteka', myteka);

var heromedicine = panadol;
function updateHeroWithPanadol() {
    document.getElementById("heroTitle").innerText = heromedicine.name;
    document.getElementById("heroDescription").innerText = heromedicine.description;
    document.getElementById("heroImage").setAttribute("src", heromedicine.image);
    var heropricehead = document.getElementById("heroprice").getElementsByTagName('h3')[0]
    heropricehead.innerText = "Rs. " + heromedicine.price;
}

function searchCard() {
    var tosearch = document.getElementById("searchBox").value.toLowerCase();
    var cards = document.getElementsByClassName('card');
    var found = false;

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cardId = card.id.toLowerCase();
        var cardTitle = card.getElementsByClassName('card-title')[0].innerText.toLowerCase();

        if (cardId.includes(tosearch) || cardTitle.includes(tosearch)) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.style.border = "3px solid rgb(0, 168, 202)"; // Highlight the found card
            setTimeout(() => { card.style.border = ""; }, 3000);
            found = true;
            break;
        }
    }

    if (!found) {
        var pnf = document.getElementById("pnf");
        pnf.classList.remove("opacityzero");
        setTimeout(() => { pnf.classList.add("opacityzero") }, 2000);
    }
}

function openMain(medicineclicked) {
    document.getElementById("mainpopup").classList.remove("displaynone");
    updateMedicineCard('maincard', medicineclicked);
}

function buyMain() {
    var pas = document.getElementById("pas");
    pas.classList.remove("opacityzero");
    setTimeout(() => { pas.classList.add("opacityzero") }, 2000);
    document.getElementById("mainpopup").classList.add("displaynone");
}

function closeMain() {
    document.getElementById("mainpopup").classList.add("displaynone");
}

// updateMedicineCard('maincard', panadol)

updateHeroWithPanadol();
console.warn("Donot Try any script here or else you will be tracked and then believe me you are gone\n\nJust Kidding Have fun :)")