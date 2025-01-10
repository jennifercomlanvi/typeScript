class Stack<T>{
    private data: T[] = [];
    
    push(value: T): void {
        this.data.push(value);
    }
    
    pop(): T | undefined {
        if(this.data.length){
          return this.data.pop();  
        }
        
    }

}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());