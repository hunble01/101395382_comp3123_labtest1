function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        // Check if the input is an array
        if (!Array.isArray(mixedArray)) {
            reject(new Error("Input must be an array"));
            return;
        }

        // Filter non-string values and convert remaining strings to lowercase
        const lowerCasedWords = mixedArray
            .filter(item => typeof item === 'string') // Keep only strings
            .map(item => item.toLowerCase()); // Convert to lowercase

        resolve(lowerCasedWords);
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => {
        console.log("Lowercased words:", result); // Output: ['pizza', 'wings']
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
