class Stack1<T>{
    private size = 0;
    private elements :T[] = []
    isEmpty():boolean {
        return this.size === 0;
    }
    push(value:T):void {
        this.elements[this.size++] = value;
    }
    pop():T{
        if(this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.elements[--this.size];
    }
}
describe("stack", () => {
    it("stack is empty", () => {
        const stack = new Stack1();
        expect(stack.isEmpty()).toEqual(true);
    })

    it("when push stack,stack is NOT empty", () => {
        const stack = new Stack1();
        stack.push(1);
        expect(stack.isEmpty()).toEqual(false);
    })
})