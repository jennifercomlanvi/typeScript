function findPalindrome(text:string): string[] {
    const words = text.toUpperCase().split(" ");
    console.log(words)
    const palindromes: string[] = [];
    for (const word of words) {
        if (word.length > 1  &&  word === word.split('').reverse().join('')) {
            if(!palindromes.includes(word)){
            palindromes.push(word); 
            }    
        }
    }
    console.log(palindromes)
    return palindromes;
}

const text = "Le radar a vu Anna avec un kayak et un autre radar.";

findPalindrome(text);