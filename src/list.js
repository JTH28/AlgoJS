function List()	{
	this.listSize 		= 0;
	this.pos 		= 0;
	this.dataStore 		= [];
	this.clear 		= clear;
	this.find 		= find;
	this.toString 		= toString;
	this.insert 		= insert;
	this.append 		= append;
	this.remove		= remove;
	this.front		= front;
	this.end		= end;
	this.prev		= prev;
	this.next		= next;
	this.length		= length;
	this.currPos		= currPos;
	this.moveTo		= moveTo;
	this.getElement 	= getElement;
	this.contains		= contains;
}

function append(element){
	this.dataStore[this.listSize++] = element;	
}

function find(element){
	for(var i = 0; i < this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}

function length(){
	return this.listSize;
}

function toString(){
	return this.dataStore;
}

function remove(element){
	var foundAt = this.find(element);
	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function insert(element, after){
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1, 0, element);
		this.listSize++;
		return true;
	}
	return false;
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

function contains(element){
	for(var i = 0; i < this.dataStore.length; ++i)	{
		if(this.dataStore[i] === element){
			return true;
		}
	}
	return false;
}

function front(){
	this.pos = 0;
}

function end(){
	this.pos = this.listSize-1;
}

function prev(){
	if((this.pos) > 0)	{
		this.pos--;
	}
}

function next(){
	if(this.pos < this.listSize-1)	{
		this.pos;
	}
}

function currPos(){
	return this.pos;
}

function moveTo(position)	{
	this.pos = position;
}

function getElement(){
	return this.dataStore[this.pos];
}

var wordsThatShouldBeSaidMore = new List();
wordsThatShouldBeSaidMore.append("Love");
wordsThatShouldBeSaidMore.append("happiness");
wordsThatShouldBeSaidMore.append("devotion");
wordsThatShouldBeSaidMore.append("fun");
wordsThatShouldBeSaidMore.append("space");
wordsThatShouldBeSaidMore.append("galaxy");
wordsThatShouldBeSaidMore.append("friend");
wordsThatShouldBeSaidMore.append("why");
wordsThatShouldBeSaidMore.append("how");
wordsThatShouldBeSaidMore.append("mastery");
wordsThatShouldBeSaidMore.append("wizard");
wordsThatShouldBeSaidMore.append("dragon");
wordsThatShouldBeSaidMore.append("doom");
wordsThatShouldBeSaidMore.append("salvation");
wordsThatShouldBeSaidMore.append("way");
wordsThatShouldBeSaidMore.append("hacker");
wordsThatShouldBeSaidMore.append("peace");
wordsThatShouldBeSaidMore.append("knowledge");
wordsThatShouldBeSaidMore.append("night");
wordsThatShouldBeSaidMore.append("dreams");
wordsThatShouldBeSaidMore.append("fantasy");
wordsThatShouldBeSaidMore.append("late");
wordsThatShouldBeSaidMore.append("hello");
wordsThatShouldBeSaidMore.append("elegant");
wordsThatShouldBeSaidMore.append("art");
wordsThatShouldBeSaidMore.append("stars");
wordsThatShouldBeSaidMore.append(42);
wordsThatShouldBeSaidMore.append("infinity");
wordsThatShouldBeSaidMore.append("travel");
wordsThatShouldBeSaidMore.append("book");
wordsThatShouldBeSaidMore.append("idea");
wordsThatShouldBeSaidMore.append("zergling");
//Dear God, I can not write another word >.<
//(> ")>
//Then I put zergling into the list. LOL
//:D

print(wordsThatShouldBeSaidMore.contains(42));
print(wordsThatShouldBeSaidMore.contains("42"));

//Look at the function contains. If the equaliy, == , is used these become true.
//If the equality, ===, is used, the second become false. Not really suprising.

print(wordsThatShouldBeSaidMore.toString());

wordsThatShouldBeSaidMore.append("square");
print(wordsThatShouldBeSaidMore.toString());

wordsThatShouldBeSaidMore.remove("square"); 
print(wordsThatShouldBeSaidMore.toString());
//Only thing involving a square that interesting is a Confucious quote >:/

wordsThatShouldBeSaidMore.insert();
print(wordsThatShouldBeSaidMore.toString());







