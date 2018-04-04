class Queue {
	constructor(){
		this.data = [];
	}

	enqueue(element) {
		this.data.push(element);
	}

	dequeue() {
		return this.data.shift();
	}

	front() {
		return this.data[0];
	}

	back() {
		return this.data[this.data.length - 1];
	}


	toString() {
		let str = "";
		for(let element of this.data)
		{
			str += element + " ";
		}
		return str;
	}

	empty() {
		return this.data.length == 0;
	}
}

let testQue = new Queue();
testQue.enqueue(1);
testQue.enqueue(2);
testQue.enqueue(3);
testQue.enqueue(4);
testQue.enqueue(5);
console.log(testQue.toString());
testQue.dequeue();
console.log(testQue.toString());
