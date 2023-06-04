    function removeDuplicates(array) {
        var uniqueArray = [];
    
        // Iterate over the array and add unique elements to the uniqueArray
        for (var i = 0; i < array.length; i++) {
            if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    // Test the function by calling it with an array
    var inputArray = [1, 2, 3, 2, 4, 3, 5];
    var resultArray = removeDuplicates(inputArray);
    console.log("Array with duplicates removed: " + resultArray);
    