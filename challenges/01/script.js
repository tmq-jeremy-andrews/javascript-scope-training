class Warrior {
  constructor(name, type, weapon) {
    this.name = name;
    this.type = type;
    this.weapon = weapon;
  }
}

let globalWarriors = [];
let secretWarriors = [];

const createWarriors = () => {
  globalWarriors = [
    new Warrior("Jamsheed", "Infantry", "RPG"),
    new Warrior("Jamal", "Zulu", "Spear"),
    new Warrior("Tormund", "Viking", "Axe"),
  ];

  let secretWarriors = [
    new Warrior("Altair", "Assassin", "Blade"),
    new Warrior("Abu Hajaar", "Insurgent", "Kalashnikov"),
    new Warrior("Ricky", "CIA", "Classified"),
  ];
};

console.log("Before creating warriors:", globalWarriors, secretWarriors);
createWarriors();
console.log("After creating warriors:", globalWarriors, secretWarriors);
