//Step 1 - Get the word
//Step 2 - Reverse the word
//Strings are arrays of characters
//We can use the same code to access the letters in a string
//array[index] - give me the value of array at position index
//string[index] - give me the letter in the string at position index

//Frank
//["F", "r", "a", "n", "k"]


//wrapper function to control the app
function getWord() {
    //get the user's word
    let word = document.getElementById("getWord").value;

    //store the reversed word in a variable
    let revWord = flipWord(word);

    //pass the original and reversed words to the display function
    displayResults(word, revWord);
};

//this function does the "work" of the app, reversing a string
function flipWord(word) {

    //create a variable that will store the reversed word
    let revWord = "";

    //loop through the given word one letter at a time starting at the end
    for (let index = word.length - 1; index >= 0; index--) {
        //store the letter from the loop
        let letter = word[index];

        //add that letter to the variable created above
        revWord += letter;
    }

    //after the loop send back the reversed word
    return revWord;
}


//this function takes in information and prints it to the screen
function displayResults(word, revWord) {
    //access the output area
    let output = document.getElementById("output");

    //replace what is currently inside the <p> element with the phrase below
    output.innerText = `You entered the word ${word}. Reversed is ${revWord}`;

};

//Notes for TacoCat/Palindrome
//Basic completion is reversing the word and comparing it to the original - print if word equals reverse word yes or no
//Better completion is handling capital vs lower case letters T != t
//Extra credit is handling spaces and special characters
//You can include the array function version of this exercise only if you have completed the for loop version