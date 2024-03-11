//1) Sum To Zero
//runtime: O(n)

function addToZero(nums) {
    let seenNumbers = new Set();
    
    for (let num of nums) {
        if (seenNumbers.has(-num)) {
            return true;
        }

        seenNumbers.add(num);
    }

    return false;

}

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

//2) Unique Characters
//runtime: O(n)

function hasUniqueChars(word) {
    let uniqueChars = new Set();

    for (let char of word) {
        if (uniqueChars.has(char)) {
            return false;
        }

        uniqueChars.add(char);
    }

    return true;
}

console.log(hasUniqueChars("Monday"));  
console.log(hasUniqueChars("Moonday")); 

//3) Pangram Sentence
//runtime: O(n)

function isPangram(sentence) {
    sentence = sentence.toLowerCase();

    let uniqueLetters = new Set();

    for (let char of sentence) {
        if (/[a-z]/.test(char)) {
            uniqueLetters.add(char);
        }
    }

    return uniqueLetters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

//4) Longest Word
//runtime: O(n)

function findLongestWord(words) {
    let longestLength = 0;

    for (let word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
}

console.log(findLongestWord(["hi", "hello"]));
