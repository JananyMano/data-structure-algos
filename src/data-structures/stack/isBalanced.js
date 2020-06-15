export default function isBalanced(s) {
    let stack = [];

    let open =  {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char)
                return 'NO';
        }
    }

    return (stack.length === 0 && s !== '') ? 'YES' : 'NO';

}