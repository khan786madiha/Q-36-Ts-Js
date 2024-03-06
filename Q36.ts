// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string): void {
    console.log(`I have a ${size} size T-shirt, message on the T-shirt"${message}"`);
}

// Calling the function
make_shirt("Small", "This T-shirt is too small for me!");
make_shirt("Large", "This T-shirt is perfect for me!");
make_shirt("Large", "This T-shirt is too large for me!");
