const visCount = document.getElementById('visCount');
updateSiteCounter();

const defTypes = [
    { name: "Normal", imgPath: "./img/Normal_icon_LA.png", Normal: 1, Fighting: 2, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 0, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Fighting", imgPath: "./img/Fighting_icon_LA.png", Normal: 1, Fighting: 1, Flying: 2, Poison: 1, Ground: 1, Rock: 0.5, Bug: 0.5, Ghost: 1, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 0.5, Fairy: 2 },
    { name: "Flying", imgPath: "./img/Flying_icon_LA.png", Normal: 1, Fighting: 0.5, Flying: 1, Poison: 1, Ground: 0, Rock: 2, Bug: 0.5, Ghost: 1, Steel: 1, Fire: 1, Water: 1, Grass: 0.5, Electric: 2, Psychic: 1, Ice: 2, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Poison", imgPath: "./img/Poison_icon_LA.png", Normal: 1, Fighting: 0.5, Flying: 1, Poison: 0.5, Ground: 2, Rock: 1, Bug: 0.5, Ghost: 1, Steel: 1, Fire: 1, Water: 1, Grass: 0.5, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 1, Fairy: 0.5 },
    { name: "Ground", imgPath: "./img/Ground_icon_LA.png", Normal: 1, Fighting: 1, Flying: 1, Poison: 0.5, Ground: 1, Rock: 0.5, Bug: 1, Ghost: 1, Steel: 1, Fire: 1, Water: 2, Grass: 2, Electric: 0, Psychic: 1, Ice: 2, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Rock", imgPath: "./img/Rock_icon_LA.png", Normal: 0.5, Fighting: 2, Flying: 0.5, Poison: 0.5, Ground: 2, Rock: 1, Bug: 1, Ghost: 1, Steel: 2, Fire: 0.5, Water: 2, Grass: 2, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Bug", imgPath: "./img/Bug_icon_LA.png", Normal: 1, Fighting: 0.5, Flying: 2, Poison: 1, Ground: 0.5, Rock: 2, Bug: 1, Ghost: 1, Steel: 1, Fire: 2, Water: 1, Grass: 0.5, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Ghost", imgPath: "./img/Ghost_icon_LA.png", Normal: 0, Fighting: 0, Flying: 1, Poison: 0.5, Ground: 1, Rock: 1, Bug: 0.5, Ghost: 2, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 2, Fairy: 1 },
    { name: "Steel", imgPath: "./img/Steel_icon_LA.png", Normal: 0.5, Fighting: 2, Flying: 0.5, Poison: 0, Ground: 2, Rock: 0.5, Bug: 0.5, Ghost: 1, Steel: 0.5, Fire: 2, Water: 1, Grass: 0.5, Electric: 1, Psychic: 0.5, Ice: 0.5, Dragon: 0.5, Dark: 1, Fairy: 0.5 },
    { name: "Fire", imgPath: "./img/Fire_icon_LA.png", Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 2, Rock: 2, Bug: 0.5, Ghost: 1, Steel: 0.5, Fire: 0.5, Water: 2, Grass: 0.5, Electric: 1, Psychic: 1, Ice: 0.5, Dragon: 1, Dark: 1, Fairy: 0.5 },
    { name: "Water", imgPath: "./img/Water_icon_LA.png", Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Steel: 0.5, Fire: 0.5, Water: 0.5, Grass: 2, Electric: 2, Psychic: 1, Ice: 0.5, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Grass", imgPath: "./img/Grass_icon_LA.png", Normal: 1, Fighting: 1, Flying: 2, Poison: 2, Ground: 0.5, Rock: 1, Bug: 2, Ghost: 1, Steel: 1, Fire: 2, Water: 0.5, Grass: 0.5, Electric: 0.5, Psychic: 1, Ice: 2, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Electric", imgPath: "./img/Electric_icon_LA.png", Normal: 1, Fighting: 1, Flying: 0.5, Poison: 1, Ground: 2, Rock: 1, Bug: 1, Ghost: 1, Steel: 0.5, Fire: 1, Water: 1, Grass: 1, Electric: 0.5, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Psychic", imgPath: "./img/Psychic_icon_LA.png", Normal: 1, Fighting: 0.5, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 2, Ghost: 2, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 0.5, Ice: 1, Dragon: 1, Dark: 2, Fairy: 1 },
    { name: "Ice", imgPath: "./img/Ice_icon_LA.png", Normal: 1, Fighting: 2, Flying: 1, Poison: 1, Ground: 1, Rock: 2, Bug: 1, Ghost: 1, Steel: 2, Fire: 2, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 0.5, Dragon: 1, Dark: 1, Fairy: 1 },
    { name: "Dragon", imgPath: "./img/Dragon_icon_LA.png", Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Steel: 1, Fire: 0.5, Water: 0.5, Grass: 0.5, Electric: 0.5, Psychic: 1, Ice: 2, Dragon: 2, Dark: 1, Fairy: 2 },
    { name: "Dark", imgPath: "./img/Dark_icon_LA.png", Normal: 1, Fighting: 2, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 2, Ghost: 0.5, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 0, Ice: 1, Dragon: 1, Dark: 0.5, Fairy: 2 },
    { name: "Fairy", imgPath: "./img/Fairy_icon_LA.png", Normal: 1, Fighting: 0.5, Flying: 1, Poison: 2, Ground: 1, Rock: 1, Bug: 0.5, Ghost: 1, Steel: 2, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 0, Dark: 0.5, Fairy: 1 },
    { name: "None", imgPath: "./img/None_icon_LA.png", Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Steel: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Fairy: 1 }
]

function fillTypeDiv(typediv, divnum) {
    for (const type of defTypes) {
        var img = document.createElement('img');
        img.src = type.imgPath;
        img.classList.add('typeimg');

        var div = document.createElement('div');
        div.id = 'typecard';

        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.classList.add('typeitem');
        radiobox.id = type.name + divnum;
        radiobox.name = 'type' + divnum;
        radiobox.onclick = updateWeakness;

        var label = document.createElement('label');
        label.htmlFor = type.name + divnum;

        var span = document.createElement('span');
        span.appendChild(document.createTextNode(type.name));

        typediv.appendChild(div);
        div.appendChild(label);
        label.appendChild(radiobox);
        label.appendChild(img);
        label.appendChild(document.createElement('br'));
        label.appendChild(span);
    }
}

function updateWeakness() {
    const wtype1 = defTypes.find(findtype => findtype.name === document.querySelector('input[name="type1"]:checked').id.slice(0, -1));
    const wtype2 = defTypes.find(findtype => findtype.name === document.querySelector('input[name="type2"]:checked').id.slice(0, -1));
    const wtext = {};
    const eff0x = [];
    const effp25x = [];
    const effp5x = [];
    const eff2x = [];
    const eff4x = [];

    var span = document.createElement('span');
        span.id = 'typecombo';
        span.innerHTML = "Type(s)"

    var img1 = document.createElement('img');
    img1.src = wtype1.imgPath;
    img1.classList.add('typeimg');

    var img2 = document.createElement('img');
    img2.src = wtype2.imgPath;
    img2.classList.add('typeimg');

    var wcdiv = document.createElement('div');
    wcdiv.id = 'weakcard';

    document.querySelector('#weaknesses').replaceChildren(wcdiv);
    wcdiv.appendChild(span);
    wcdiv.appendChild(document.createElement('br'));
    wcdiv.appendChild(img1);
    wcdiv.appendChild(img2);
    wcdiv.appendChild(document.createElement('br'));

    for (let i = 2; i < Object.keys(wtype1).length; i++) {
        wtext[Object.keys(wtype1)[i]] = wtype1[Object.keys(wtype1)[i]] * wtype2[Object.keys(wtype2)[i]];
    }

    Object.keys(wtext).forEach(key => {
        switch (wtext[key]) {
            case 0:
                eff0x.push(key);
                break;
            case 0.25:
                effp25x.push(key);
                break;
            case 0.5:
                effp5x.push(key);
                break;
            case 2:
                eff2x.push(key);
                break;
            case 4:
                eff4x.push(key);
                break;
            default:
                break;
        }
    });

    if (eff4x.length > 0) {
        var wrdiv = document.createElement('div');
        wrdiv.id = 'wresultcard';
        var span = document.createElement('span');
        span.id = 'eff4x effheader';
        span.innerHTML = "4x super effective";
        wcdiv.appendChild(wrdiv);
        wrdiv.appendChild(span);
        wrdiv.appendChild(document.createElement('br'));
        eff4x.forEach(efftype => {
            effimg = document.createElement('img');
            effimg.src = "./img/" + efftype + "_icon_LA.png";
            effimg.classList.add('typeimg');
            wrdiv.appendChild(effimg);
        });
    }
    if (eff2x.length > 0) {
        var wrdiv = document.createElement('div');
        wrdiv.id = 'wresultcard';
        var span = document.createElement('span');
        span.id = 'eff2x effheader';
        span.innerHTML = "2x super effective";
        wcdiv.appendChild(wrdiv);
        wrdiv.appendChild(span);
        wrdiv.appendChild(document.createElement('br'));
        eff2x.forEach(efftype => {
            effimg = document.createElement('img');
            effimg.src = "./img/" + efftype + "_icon_LA.png";
            effimg.classList.add('typeimg');
            wrdiv.appendChild(effimg);
        });
    }
    if (effp5x.length > 0) {
        var wrdiv = document.createElement('div');
        wrdiv.id = 'wresultcard';
        var span = document.createElement('span');
        span.id = 'effp5x effheader';
        span.innerHTML = "50% not very effective";
        wcdiv.appendChild(wrdiv);
        wrdiv.appendChild(span);
        wrdiv.appendChild(document.createElement('br'));
        effp5x.forEach(efftype => {
            effimg = document.createElement('img');
            effimg.src = "./img/" + efftype + "_icon_LA.png";
            effimg.classList.add('typeimg');
            wrdiv.appendChild(effimg);
        });
    }
    if (effp25x.length > 0) {
        var wrdiv = document.createElement('div');
        wrdiv.id = 'wresultcard';
        var span = document.createElement('span');
        span.id = 'effp25x effheader';
        span.innerHTML = "25% not very effective";
        wcdiv.appendChild(wrdiv);
        wrdiv.appendChild(span);
        wrdiv.appendChild(document.createElement('br'));
        effp25x.forEach(efftype => {
            effimg = document.createElement('img');
            effimg.src = "./img/" + efftype + "_icon_LA.png";
            effimg.classList.add('typeimg');
            wrdiv.appendChild(effimg);
        });
    }
    if (eff0x.length > 0) {
        var wrdiv = document.createElement('div');
        wrdiv.id = 'wresultcard';
        var span = document.createElement('span');
        span.id = 'eff0x effheader';
        span.innerHTML = "immune";
        wcdiv.appendChild(wrdiv);
        wrdiv.appendChild(span);
        wrdiv.appendChild(document.createElement('br'));
        eff0x.forEach(efftype => {
            effimg = document.createElement('img');
            effimg.src = "./img/" + efftype + "_icon_LA.png";
            effimg.classList.add('typeimg');
            wrdiv.appendChild(effimg);
        });
    }

}

fillTypeDiv(document.querySelector('#type1'), 1);
fillTypeDiv(document.querySelector('#type2'), 2);

document.getElementById("Normal1").checked = true;
document.getElementById("None2").checked = true;

function updateSiteCounter() {
    fetch('https://api.countapi.xyz/hit/regularwave_pokemon-weakness-calc')
        .then(response => response.json())
        .then(response => {
            visCount.innerHTML = response.value;
        })
}