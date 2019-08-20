

export default class FarmAnimal {
	constructor(name, sound, image) {
		this.name = name;
		this.image = image;
		this.sound = function() {
			alert(sound);
		};
	}
}

export class HousePet extends FarmAnimal {
	constructor(name, sound, image) {
        super(name, sound, image);
		};
}
