class Deque {
	constructor(){
		this.data = [];
	}

	enqueue(element) {
		this.data.push(element);
	}

	dequeue() {
		return this.data.shift();
	}

	addFront(element) {
		this.data.unshift(element);
	}

	removeEnd() {
		return this.data.pop();
	}

	peek() {
		return this.data[0];
	}

	back() {
		return this.data[this.data.length - 1];
	}

	toString() {
		let str = "";
		for(let i = 0; i < this.data.length; i++)
		{
			str += this.data[i] + "\n";
		}
		return str;
	}

	empty() {
		return this.data.length == 0;
	}
}


//fix

 testPalindrome(word)
{
	let s = new Deque();
	for(let i = 0; i < word.length; i++) {
		s.enqueue(word[i]);
	}

	let isPalindrome = true; // We will give it the benefit of the doubt :)
	let count = 1;

	while(s.data.length != 1 && isPalindrome) {
		isPalindrome = (s.dequeue() == s.removeEnd())
	}

	return isPalindrome;
}

console.log(testPalindrome("racecar"));
console.log(testPalindrome("Zerg"));
