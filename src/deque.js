function Deque()
{
	this.data = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.addFront = addFront;
	this.removeEnd = removeEnd;
	this.peek = peek;
	this.back = back;
	this.toString = toString;
	this.empty = empty;	
}

function enqueue(element)
{
	this.data.push(element);
}

function dequeue()
{
	return this.data.shift();
}

function addFront(element)
{
	this.data.unshift(element);
}

function removeEnd()
{
	return this.data.pop();
}

function peek()
{
	return this.data[0];
}

function back()
{
	return this.data[this.data.length - 1];
}

function toString()
{
	var str = "";
	for(var i = 0; i < this.data.length; i++)
	{
		str += this.data[i] + "\n";
	}
	return str;
}

function empty()
{
	return this.data.length == 0;
}

//fix

function testPalindrome(word)
{
	var s = new Deque();
	for(var i = 0; i < word.length; i++)
	{
		s.enqueue(word[i]);
	}
	
	var isPal = true; // We will give it the benefit of the doubt :)
	var count = 1;

	while(s.data.length != 1 && isPal)
	{
		
		isPal = (s.dequeue() == s.removeEnd())
	}
	 
	return isPal;
}

console.log(testPalindrome("racecar"));
console.log(testPalindrome("Zerg"));

