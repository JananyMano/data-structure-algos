export default class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    isEmpty() {
        // The stack is empty if the top is equal to -1
        return this.top === -1;
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }

        // Just read the value of top of the stack
        return this.stack[this.top];
    }

    push(value) {
        // Pushing means to lay the value on top of the stack. 
        this.top += 1;
        this.stack[this.top] = value;
    }

    pop() {
        // Let 's try to delete the first value on top of the stack
        if(this.top < 0) {
            return null;
        } else {
            let el = this.stack[this.top];
            this.top -= 1;
            return el;
        }
    }
}