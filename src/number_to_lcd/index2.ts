function number2ToLcd(number: number, width:number, height:number): string {
    const ldsDigits: {[key: string]: string[]} ={
        "0": [" _ ", "| |", "|_|"],
        "1": ["   ", "  |", "  |"],
        "2": [" _ ", " _|", "|_ "],
        "3": [" _ ", " _|", " _|"],
        "4": ["   ", "|_|", "  |"],
        "5": [" _ ", "|_ ", " _|"],
        "6": [" _ ", "|_ ", "|_|"],
        "7": [" _ ", "  |", "  |"],
        "8": [" _ ", "|_|", "|_|"],
        "9": [" _ ", "|_|", " _|"]
    }
    const digits: string = number.toString();
    const lcdLines:string [][] = [[],[],[]];
    for (const digit of digits) {
        const digitLcd = ldsDigits[digit];
        const top = digitLcd[0][0] + digitLcd[0][1].repeat(width);
        lcdLines[0].push(digitLcd[0]);
        lcdLines[1].push(digitLcd[1]);
        lcdLines[2].push(digitLcd[2]);
        console.log(lcdLines)
    }
    const result = lcdLines.map(line => line.join(' ')).join('\n');
    return result;


}
// console.log(number2ToLcd(2));