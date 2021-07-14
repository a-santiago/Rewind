//step 1 get the word
//Step 2 revese the word
// we can use the same code to access letters in a string
//array[index] - give me the value of array at the position index
//string[index] - give me the letter in the string at the position index


function getWord() {
    let word = document.getElementById("tacoCat").value;

    let revWord = flipWord(word);

    displayResults(word, revWord);

    let trueFalsePalindrome = document.getElementById("output2");
    if (word === revWord) {
        trueFalsePalindrome.innerHTML = "It's a palindrome!";
    } else {
        trueFalsePalindrome.innerHTML = "It's not a palindrome!";
    }

};

function flipWord(word) {

    let revWord = "";

    for (let index = word.length - 1; index >= 0; index--) {
        let letter = word[index];

        revWord += letter;
    }

    return revWord;

}

function displayResults(word, revWord) {
    let output = document.getElementById("output");

    output.innerText = `You entered the word ${word}. Reversed is ${revWord}`;

}