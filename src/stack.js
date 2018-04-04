class Stack {
	constructor() {
		this.data = [];
	}

	isEmpty() {
		return this.data.length === 0;
	}

	push(ele) {
		this.data.push(ele);
	}

	pop() {
		if(this.isEmpty()) {
			throw "underflow";
		}

		return this.data.pop();
	}

	toString() {
		let str = "";
		for(let element of this.data){
			str += element + " ";
		}
		return str;
	}
}


let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log(s.toString());
s.pop();
console.log(s.toString());

for(let i = 1; i < 10; i++){
	s.pop();
}
