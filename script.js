let arr = [
    { "name": "twilight" },
    { "name": "phantom" },
    { "name": "echo" },
    { "name": "shadow" },
    { "name": "specter" },
    { "name": "wraith" },
    { "name": "banshee" },
    { "name": "gargoyle" },
    { "name": "chimera" },
    { "name": "hydra" },
    { "name": "griffin" },
    { "name": "minotaur" },
    { "name": "sphinx" },
    { "name": "cyclops" },
    { "name": "centaur" },
    { "name": "siren" },
    { "name": "nymph" },
    { "name": "dryad" },
    { "name": "naiad" },
    { "name": "undine" },
    { "name": "sylph" },
    { "name": "elf" },
    { "name": "dwarf" },
    { "name": "giant" },
    { "name": "troll" },
    { "name": "goblin" },
    { "name": "orc" },
    { "name": "ogre" },
    { "name": "demon" },
    { "name": "angel" },
    { "name": "archangel" },
    { "name": "cherub" },
    { "name": "seraph" },
    { "name": "virtue" },
    { "name": "power" },
    { "name": "dominion" },
    { "name": "throne" },
    { "name": "constellation" },
    { "name": "nebula" },
    { "name": "Comet" },
    { "name": "Meteor" },
    { "name": "quasar" },
    { "name": "nova" },
    { "name": "Void" },
    { "name": "zenith" },
    { "name": "nadir" },
    { "name": "aurora" },
    { "name": "tempest"},
    { "name": "maelstrom"},
    { "name": "vortex"},
    { "name": "quicksilver"},
    { "name": "obsidian"},
    { "name": "onyx"},
    { "name": "ivory"},
    { "name": "amber"},
    { "name": "ebony"},
    { "name": "crimson"},
    { "name": "azure"},
    { "name": "viridian"},
    { "name": "scarlet"},
    { "name": "gold"},
    { "name": "silver"},
    { "name": "bronze"},
    { "name": "iron"},
    { "name": "diamond"},
    { "name": "emerald"},
    { "name": "sapphire"},
    { "name": "ruby"},
    { "name": "amethyst"},
    { "name": "topaz"},
    { "name": "opal"},
    { "name": "pearl"},
    { "name": "coral"},
    { "name": "jade"},
    { "name": "lapis"},
    { "name": "harmony" },
    { "name": "discord" },
    { "name": "requiem" },
    { "name": "epiphany" },
    { "name": "odyssey" },
    { "name": "legacy" },
    { "name": "revelation" },
    { "name": "solstice"},
    { "name": "equinox"},
    { "name": "supernova"},
    { "name": "blackhole"},
    { "name": "singularity"},
    { "name": "paradox"},
    { "name": "enigma"},
    { "name": "labyrinth"},
    { "name": "mirage"},
    { "name": "oasis"},
    { "name": "haven"},
    { "name": "sanctuary"},
    { "name": "citadel"},
    { "name": "fortress"},
    { "name": "bastion"},
    { "name": "ruin"},
    { "name": "remnant"},
    { "name": "effigy"},
    { "name": "icon"},
    { "name": "symbol"},
    { "name": "omen"},
    { "name": "portent"},
    { "name": "augury"},
    { "name": "prophecy"},
    { "name": "oracle"},
    { "name": "seer"},
    { "name": "sage"},
    { "name": "guru"},
    { "name": "mentor"},
    { "name": "disciple"},
    { "name": "initiate"},
    { "name": "adept"},
    { "name": "master"},
    { "name": "ascension"},
    { "name": "transcendence"},
    { "name": "immortality"},
    { "name": "eternity"},
    { "name": "infinity"}
];

let ul=document.querySelector("ul");
let input=document.querySelector("input");
let clrBtn=document.querySelector(".clrBtn");

input.oninput=function() {
    ul.innerHTML="";
    arr.forEach(item=>{
        let highlightName=item.name;
        let searchValue=input.value;
        if(searchValue){
            if(item.name.charAt(0).toLowerCase()===searchValue.toLowerCase()){
                highlightName=`<span class="highlight"> ${item.name.charAt(0)} </span>${item.name.slice(1)}`;
            }
        }
        if (highlightName.toLowerCase().includes(searchValue.toLowerCase())) {
            ul.innerHTML += `<li>${highlightName}</li>`;
        }
    });
}

function clrSrch(){
    input.value = "";
    ul.innerHTML = "";
    arr.forEach(item=>{
        ul.innerHTML += `<li>${item.name}</li>`;
    });
}

clrBtn.addEventListener("click", clrSrch);
arr.forEach(item => {
    ul.innerHTML += `<li>${item.name}</li>`;
});