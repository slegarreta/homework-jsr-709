// ## Syntax

// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

// let or var or const: how you declare the object for the first time
// objectName: is the name you assign the object
// {} curly braces: define the object, and hold the key/value pairs.
// A key: the first part of key/value pair inside an object. it is like an index of an array but has a name you assign.
// A value: is what a key refers to, and can be any datatype.
// ,: placing a , after a key/value pair signifies that an additional key/value pair will follow within the same object.


let me = {
    name: 'Sam',
    age: 33,
    email: 'samlegarreta@gmail.com'
}

console.log(me);
console.log(me.name);

me.age = 1000;

console.log(me.age)

me.residence = 'washington D.C.';

console.log(me.residence);
console.log(me);


// Slimer

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }
console.log(monster.name);
monster.type = 'creature';
monster.age = 6;
console.log(monster);

// Ogres




var attackPoints = {
    max: 0,
    orc: 0
}

var adventurer = {
    name: 'Max',
    hitpoints: 5,
    weapons: ['un-armed','fist', 'bat', 'sword', 'axe', 'gun'],
    attack: function(weapon) {
        for (i = 0; i < this.weapons.length; i++) {
            if (weapon === this.weapons[i])  {
                attackPoints.max += i;
                attackPoints.orc = ogre.hitpoints;
            };
        };

        }
};

var ogre = {
    name: 'Orc',
    hitpoints: 5,
    weapons: ['un-armed','fist', 'jaws', 'club', 'mace', 'gun'],
    attack: function(weapon) {
        for (i = 0; i < this.weapons.length; i++) {
            if (weapon === this.weapons[i])  {
                // attackPoints.orc.push(i);
                // attackPoints.max.push(adventurer.hitpoints);
            };
        };
    }
}

adventurer.attack('bat');

// ogre.attack('club');
console.log(attackPoints);

function maxAttack() {
    let points = attackPoints.orc - attackPoints.max;
    console.log(points)
    if (attackPoints.orc > 0) {
        console.log('orc has ' + points + ' points.');
    } else if (attackPoints.orc < 0){
        console.log('you have killed the orc');
    }
} maxAttack();

adventurer.attack('axe');

maxAttack();


// # Objects, Arrays and Functions

const fun = {
    asdf: ["afd", "matt", 'sweet']
};
console.log(fun.asdf[2]);

const body = {
    arm: {
        elbow: 'pointy'
    }
};
console.log(body.arm.elbow);

const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
};
for (i = 0; i < refrigerator.fruits.length; i++) {
    console.log(refrigerator.fruits[i]);
};

const instruments = {
    banjo: ["1920 gibson", "deering", "washburn"],
    guitar: {
      acoustic: ["martin", "taylor", "santa cruz", "gibson"],
      electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
      nylon: ["baldwin", "cordoba"]
    },
    mandolin: ["eastman", "weber", "collings"]
  };

  console.log(instruments.guitar.electric[1]);
  console.log(instruments.guitar.acoustic[2]);
  console.log(instruments.banjo[2]);
  console.log(instruments.mandolin[1]);
  for (i = 0; i < instruments.guitar.electric.length; i++) {
    console.log(instruments.guitar.electric[i]);
};

instruments.singers = ['alicia keys', 'floetry', 'whitney houston'];
console.log(instruments);