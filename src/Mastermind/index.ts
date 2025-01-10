function mastermind(code:string[], guess:string[]): [number, number]{
    
    let wellPosition : number = 0;
    let wellColor : number = 0;
    for (var i=0; i<code.length; i++){
        if (code[i] === guess[i]){
            wellPosition++;
             wellColor++;
        } else if (code.includes(guess[i])){
            wellColor++;
        }
    }
    return [wellPosition, wellColor];
}

console.log(mastermind(['RED', 'GREEN', 'BLUE', 'YELLOW'], ['BLUE', 'GREEN', 'RED','PINK']));