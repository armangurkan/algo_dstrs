class Person{
	constructor(name, surname){
		this.name = name;
		this.surname = surname;
	}
	static tikitaka(){
		console.log(this.name);
		
	}
}


let arman = new Person('Arman', 'Gürkan');
let mehmet = new Person('Mehmet', 'Evkuran');
let berkan = new Person('Berkan', 'Semer');


console.log(arman);
console.log(arman.tikitaka())