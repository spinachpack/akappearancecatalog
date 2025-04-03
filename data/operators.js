// operators.js
const operators = [
  {
    id: "amiya",
    name: "Amiya",
    image: "images/Amiya_icon.webp",
    playable: true
  },
  {
    id: "dobermann",
    name: "Dobermann",
    image: "images/Dobermann_icon.webp",
    playable: true
  },
  {
    id: "ace",
    name: "Ace",
    image: "images/Ace_icon.webp",
    playable: false
  },
  {
    id: "crownslayer",
    name: "Crownslayer",
    image: "images/Crownslayer_icon.webp",
    playable: true 
  },
  {
    id: "mephisto",
    name: "Mephisto", 
    image: "images/Mephisto_icon.webp",
    playable: false
  },
  {
    id: "nearl",
    name: "Nearl",
    image: "images/Nearl_icon.webp",
    playable: true
  },
  {
    id: "faust",
    name: "Faust",
    image: "images/Faust_icon.webp",
    playable: false 
  },
  {
    id: "chen",
    name: "Ch'en",
    image: "images/Ch'en_icon.webp",
    playable: true
  },
  {
    id: "wei yenwu",
    name: "Wei Yenwu",
    image: "images/Wei_Yenwu_icon.webp",
    playable: false 
  },
  {
    id: "misha",
    name: "Misha",
    image: "images/Misha_icon.png",
    playable: false 
  },
  {
    id: "franka",
    name: "Franka",
    image: "images/Franka_icon.webp",
    playable: true
  },
  {
    id: "liskarm",
    name: "Liskarm",
    image: "images/Liskarm_icon.webp",
    playable: true
  },
  {
    id: "skullshatterer",
    name: "Skullshatterer",
    image: "images/Skullshatterer_icon.webp",
    playable: false 
  },
  {
    id: "texas",
    name: "Texas",
    image: "images/Texas_icon.webp",
    playable: true 
  },
  {
    id: "exusiai",
    name: "Exusiai",
    image: "images/Exusiai_icon.webp",
    playable: true 
  },
  {
    id: "kaltsit",
    name: "Kal'tsit",
    image: "images/Kal'tsit_icon.webp",
    playable: true 
  },
  {
    id: "wuh",
    name: "W",
    image: "images/W_icon.webp",
    playable: true 
  },
  {
    id: "talulah",
    name: "Talulah",
    image: "images/Talulah_icon.webp",
    playable: false
  },
  {
    id: "frostnova",
    name: "Frostnova",
    image: "images/FrostNova_icon.webp",
    playable: false
  },
  {
    id: "patriot",
    name: "Patriot",
    image: "images/Patriot_icon.webp",
    playable: false
  },
  {
    id: "enforcer",
    name: "Enforcer",
    image: "images/Enforcer_icon.webp",
    playable: true
  },
  {
    id: "vigna",
    name: "Vigna",
    image: "images/Vigna_icon.webp",
    playable: true
  },
  {
    id: "flamebringer",
    name: "Flamebringer",
    image: "images/Flamebringer_icon.webp",
    playable: true
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    image: "images/Hibiscus_icon.webp",
    playable: true
  },
  {
    id: "lava",
    name: "Lava",
    image: "images/Lava_icon.webp",
    playable: true
  },
  {
    id: "mudrock",
    name: "Mudrock",
    image: "images/Mudrock_icon.webp",
    playable: true
  },
  {
    id: "executor",
    name: "Executor",
    image: "images/Executor_icon.webp",
    playable: true
  },
  {
    id: "jessica",
    name: "Jessica",
    image: "images/Jessica_icon.webp",
    playable: true
  },
  {
    id: "vermeil",
    name: "Vermeil",
    image: "images/Vermeil_icon.webp",
    playable: true
  },
  {
    id: "hellagur",
    name: "Hellagur",
    image: "images/Hellagur_icon.webp",
    playable: true
  },
  {
    id: "scout",
    name: "Scout",
    image: "images/Scout_icon.webp",
    playable: false
  },
  {
    id: "hoshiguma",
    name: "Hoshiguma",
    image: "images/Hoshiguma_icon.webp",
    playable: true
  },
  {
    id: "grani",
    name: "Grani",
    image: "images/Grani_icon.webp",
    playable: true
  },
  {
    id: "carol",
    name: "Carol",
    image: "images/Carol_icon.webp",
    playable: false
  },
  {
    id: "skadi",
    name: "Skadi",
    image: "images/Skadi_icon.webp",
    playable: true
  },
  {
    id: "bigbob",
    name: "Big Bob",
    image: "images/Big_Bob_icon.webp",
    playable: false
  },
  {
    id: "specter",
    name: "Specter",
    image: "images/Specter_icon.webp",
    playable: true
  }


];

// Export for both browser and Node.js environments
if (typeof module !== 'undefined') {
  module.exports = operators;
} else {
  window.operators = operators;
}