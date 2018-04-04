function Exchange(A , i, j)	{
	var tmp = A[i];
	A[i] = A[j];
	A[j] = tmp;
}

function Partition(A , p, r)	{
	var pivot = A[r];
	var i = p - 1;

	for(var j = p; j <= r - 1; j++){
		if(A[j] <= pivot){
			i++;
			Exchange(A, i, j);
		}
	}
	Exchange(A, i+1, r);

	return i + 1;
}

function Quicksort(A , p, r){
	if(p < r){
		var q = Partition(A , p, r);
		Quicksort(A, p, q-1);
		Quicksort(A, q+1, r);
	}
}

function isSorted(Arr){
	for(var i = 0; i < Arr.length-1; i++){
		if(Arr[i] > Arr[i+1]){
			return false;
		}
	}
	return true;
}
