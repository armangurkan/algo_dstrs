class Element{
	constructor(key, value){
		this.key = key;
		this.value = value;
	}
}

class Hashtable{
	constructor(size=13){
		this.keymap = new Array(size);
	}

	_hash(key){
		let total = 0;
		let wPrime = 31;
		for(let i = 0; i< Math.min(key.length, 100); i++){
			let char = key[i].toLowerCase();
			let value = char.charCodeAt(0) - 96;
			total = (total * wPrime + value) % this.keymap.length;
		}
		return total;
	}

	set(kProp, kVal){
		let el = new Element(kProp, kVal);
		let ind = this._hash(kProp);

		el = [el];

		for(let j of this.keymap){
			if(j){
				for(let i of j){
					// console.log('This is i',i.value,'the same with', el[0].value)
					if(i.value === el[0].value){
						return `This is the chant of ${i.key}`;
					}
				}
			} else{
				continue;
			}
			
		}
		if(!this.keymap[ind]){
			this.keymap[ind] = el;
		}
		if(this.keymap[ind]){
			let flag = false;
			for (let e of this.keymap[ind]){
				if(e.key === el[0].key){
					e.value = el[0].value;
					flag = true;
					break;
				}
			}
			if(!flag){
					// console.log('flag',flag)
					this.keymap[ind].push(el[0]);
			}	
		}
		return this.keymap;

	}
	get(kProp){
		let ind = this._hash(kProp)
		// console.log('ind:',ind,'map',this.keymap)
		if(!this.keymap[ind]){

			return undefined;

		}else{
			for(let e of this.keymap[ind]){
				if(e.key === kProp){
					return e.value;
				}
			}
			return undefined;
		}

	}
}


let teams = new Hashtable();

// console.log(teams._hash('Ozge'));
// console.log(teams._hash('Arman'));
// console.log(teams._hash("Arel"));
// console.log(teams._hash("Altay"));

teams.set('GS', 'Re re re ra ra ra');
teams.set('Altay', 'Büyük Altay!');
teams.set('ManU', 'Red Devils!');
teams.set('Barca', 'Viva Barca!');
teams.set('GS', 'Avrupa Fatihisin Galatasaray!');
teams.get('GS');
teams.get('piksi');
console.log(teams.set('A', 'Avrupa Fatihisin Galatasaray'));
console.log(teams.set('B', 'Avrupa Fatihisin Galatasaray!'));


