let user = {
	name: 'sam',
  email: 'samlegarreta@gmail.com',
	age: 32,
	updateUser: function() {
		this.name = this.name.toUpperCase();
		this.age++;
	},
	purchased: [

	],
	friend: {
		name: 'kendall',
		age: 26,
		location: 'work',
		purchased: [

		],

	}
}


user.email = 'samuel.t.legarreta@medstar.net';

user.age++;

user.location = 'couch';

user.purchased.push('carbohydrates');

user.purchased.push('peace of mind');

user.purchased.push('Merino jodhpurs');

console.log(user.purchased[2]);

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;

user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');

console.log(user.friend.purchased[1]);

for (i = 0; i < user.purchased.length; i++){
	console.log(user.purchased[i]);
};

for (i = 0; i < user.friend.purchased.length; i++){
	console.log(user.friend.purchased[i]);
};

user.updateUser();

user.vehicle = {
	name: 'lear jet',
	distanceToEmpty: 5000,
	speed: 800,
	currentLocation: 'Spain',
	sound: 'quite',
	honkHorn: function() {
		this.sound = 'WRSHRRRrrrrrrrr'
	},
	fly: function() {
		if (this.distanceToEmpty > newLocation.morocco.distance) {
			return "we are going to Morocco";
		} else {
			return "too far";
		}
	}
};

var newLocation = {
	morocco: {
		distance: 1500
	},


};

user.vehicle.fly();

user.vehicle.honkHorn();
console.log(user.vehicle.fly());
console.log(user);
