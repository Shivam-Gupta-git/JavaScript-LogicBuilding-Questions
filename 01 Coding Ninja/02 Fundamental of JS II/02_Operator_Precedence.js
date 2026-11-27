console.log(2 * 4 + 6);  // 14  (* runs before +)
console.log(2 * (4 + 6)); // 20  (brackets run first)

console.log(10 - 4 - 2);      // 4   (left to right: (10-4)-2)
console.log(2 ** 3 ** 2);     // 512 (right to left: 2 ** (3**2))
console.log(true || false && false);   // true (&& runs before ||)
console.log(5 + 3 > 7);       // true (+ first, then >)

let a, b, c;
a = b = c = 5;                // right to left, all become 5