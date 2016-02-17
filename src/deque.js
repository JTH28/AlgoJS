function Deque()
{
	this.data = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.addFront = addFront;
	this.removeEnd = removeEnd;
	this.front = front;
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
	this.data.pop();
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