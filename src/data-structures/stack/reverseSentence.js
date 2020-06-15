import Stack from "./Stack";

export default function reverseSentence (str) {
    let stack = new Stack();
    let reverseSentence = "";

    str = str.split(" ");

    for(var i=0; i < str.length; i++) {
        stack.push(str[i]);
    }
    
    while(stack.top !== -1) {
        reverseSentence += stack.pop() + " ";
    }

    return reverseSentence;
        
}