function Stack()
{
	this.data = [];
	this.top = 0;
	this.push = push;
 	this.pop = pop;
	this.isEmpty = isEmpty;
}

function isEmpty()
{
	return this.top == 0;
}

function push(ele)
{
	this.data[this.top++] = ele;
}

function pop()	
{
	if(this.isEmpty())
	{
		throw "underflow";
	}
	
	return this.data[this.top]
	this.top--;
	
}
	
var s = new Stack();
var f = s.pop();
console.log(f);
