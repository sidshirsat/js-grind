function isValid(s) {
    // Stack to keep track of opening brackets
    const stack = [];

    // Map to match closing brackets with their corresponding opening ones
    const matching = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let char of s) {
        // If it's a closing bracket
        if (matching[char]) {
            // Check if the stack is empty or the top of the stack doesn't match
            if (stack.length === 0 || stack[stack.length - 1] !== matching[char]) {
                return false;
            }
            // Pop the top of the stack
            stack.pop();
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets matched correctly
    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
