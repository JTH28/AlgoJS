/*
	This program is an implementation of the Sieve of Eratosthenes. It starts with a function call boolArray which initalizes a boolean array of length n with 
	all values set to true. The next function is the actually sieve; this is called prime array. The way the sieve works is by "marking off" all the multiples of 
	a prime. So after you do this for all numbers less than n the elements of the array marked true are at a prime index. The next function, called countPrimes,
	will loop through the array and count the prime elements. So this is the same as the famous pi(x) function from Number Theory. The last function is called
	sumPrimes and it is self-documenting :P	
*/

function boolArray(n){
	boolArr=[];
	for(var i=0;i<=n;i++){
		boolArr[i]=true;
	} return boolArr
}

function primeArray(n){
	var primeArr=boolArray(n);
	primeArr[0]=false;         			
	primeArr[1]=false;
	for(var i=2;i<=n;i++){
		if(primeArr[i]){
			for(var k=2;k<=n/i;k++){    
				primeArr[i*k]=false;    
			}
		}
	} return primeArr;
}

function justPrimes(n){
	var primeArr = primeArray(n);
	var allPrimes = [];
	for(var i=0;i<primeArr.length;++i){
		if(primeArr[i])		allPrimes.push(i);	
	} return allPrimes;	
}

function countPrimes(n){
	var primeArr=primeArray(n);
	for(var i=0,k=0;i<primeArr.length;i++){
		if(primeArr[i]) k++;
	} return k;
}

function sumPrimes(n){
	var primeArr=primeArray(n);
	for(var i=0,sum=0;i<primeArr.length;i++){
		if(primeArr[i]) sum+=i;
	} return sum;
}

console.log(justPrimes(1000));  			//142913828922
