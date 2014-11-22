//partition
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

        while (i <= j) {
        while (items[i] < pivot) i++;
        while (items[j] > pivot) j--;
    
        	if (i <= j) {
            	swap(items, i, j);
            	i++;
            	j--;
        	}   
    	}  
    	return i;
}
//swap function
function swap(items, a, b){
        var temp = items[a];
        items[a] = items[b];
        items[b] = temp;
}
//quicksort
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {

        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
        return items;
}

module.exports = {
	fib: function fib(n) {
		var fibFirstNum = 0,
			fibSecondNum = 1,
			counter = 2,
			step = 0;
		
		while (counter <= n) {
			step = fibFirstNum + fibSecondNum;
			fibFirstNum = fibSecondNum;
			fibSecondNum = step;
			counter++;
		} return fibSecondNum;	
	},
	phiEstimation: function phiEstimation(n) {
		var firstNum = 0,
			secondNum = 1,
			counter = 2,
			step = 0,
			diff = 0;
		
		while (counter <= n) {
			step = fibFirstNum + fibSecondNum;
			fibFirstNum = fibSecondNum;
			fibSecondNum = step;
			counter++;
		}
		diff = secondNum / firstNum;
		return diff;o
	},
	reverseWordsOrderInString: function reverseWordsOrderInString(string) {
		return string.split(' ').reverse().join(' ');
	},
	reverseWordsInString: function reverseWordsInString(str) {
        return str.replace(/\w+/g, function (word) {
            return word.split("").reverse().join("")
        });
    },
    findNthNumber: function findNthNumber(items, n) {
    	if(n > items.length-1 && n < 0) return;
    		var index;
    		var left = 0;
    		var right = items.length - 1;
    
    	if (items.length > 1) {
        	index = partition(items, left, right);
			if (left < index - 1 && n < index) {
				quickSort(items, left, index - 1);
			}
			if (index < right && n >= index) {
				quickSort(items, index, right);
			}
		}
		return items[n-1];
	},
	median: function median(items) {
    	quickSort(items, 0, items.length - 1);
    	var result = 0;
    
    if(items.length % 2 === 0){
        result = (items[Math.floor((items.length-1)/2)] + items[Math.floor((items.length-1)/2)+1])/2;
     } else {
        result = items[Math.floor((items.length-1)/2)];
    }
    return result;
	},
	setBits: function setBits(firstNumber, secondNumber, start, end){
        var firstBinary = firstNumber.toString(2).split(''),
            secondBinary = secondNumber.toString(2).split('');

        for(var i = start, k = 0; i <= end && k < secondBinary.length; i++, k++) {
            firstBinary[i] = secondBinary[k];
        }
        return parseInt(firstBinary.join(''), 2);
    }
}


