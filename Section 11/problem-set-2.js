// 1. printReverse

function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	};
}

printReverse([1, 2, 3, 4, 5]);

// 2. isUniform (checks if all elements are identical)

function isUniform(arr){
	var first = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] !== first){
			return false;
		}
	};
	return true;
}

console.log(isUniform([1, 1, 1, 1, 1, 1]));
console.log(isUniform([1, 1, 1, 1, 1, 2]));

// 3. sumArray

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

console.log(sumArray([1, 2, 3, 4]));

// 4. max

function max(arr){
	var max = arr[0];
	arr.forEach(function(element){
		if(element > max){
			max = element;
		}
	});
	return max;
}

console.log(max([1, 2, 3, 4, 5]));
