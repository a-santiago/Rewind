function reverseString() {
    //get the user's word

    let userWord = document.getElementById("tacoCat").value;
    let regexWord = userWord.replace(/[\W_]/g).toLowerCase();
    let start = regexWord.length - 1;
    let reverseWord = "";

    //for loop
    for (let i = start; i >= 0; i--) {
        reverseWord += regexWord[i];
    }
    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;

    //palindrome
    let trueFalsePalindrome = document.getElementById("palindrome");
    if (regexWord === reverseWord) {
        trueFalsePalindrome.innerText = "It's a palindrome";
    } else {
        trueFalsePalindrome.innerText = "It's not a palindrome";
    }
}