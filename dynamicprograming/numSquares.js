/**
 * Lagrange's theorem for four squares states:
Every number can be written as the sum of four squares of integers
so my potential answers are 0,1,2,3,4

0 never happens because there's always an answer
1 happens when the number itself is a valid square
So 2,3,4 are the only available solutions.
Legendre's three square theorem states:
A number n can be written as the sum of at most three squares if n =/= 4^a (8*b+7)

So I can immediately deduce if it can be written as a sum of 4 if n==4^a (8*b+7), by contradicting the above Theorem.
All I have to do is divide n by 4 as many times as possible and mod8 the final result, to test if result%8==7
If result%8==7, Legendre's theorem is contradicted and my number cannot be written as a sum of (at most) three squares. Therefore utilizing Lagrange's theorem, my solution is immediately 4.

Otherwise, having ruled out the option 4, I have 2 and 3 remaining as the potential solutions.

I can manually check If It's a sum of 2 numbers:
say that n=a^2 +b^2 then I can easily find a^2 If i search for every number less than n.
If i happen to find any number x, such that n-x*x is a valid square, then i m done, because
n =x^2 + (n-x^2)^2 (a sum of 2 squares)

Having ruled out the solution 2, only 3 remains as the only solution
 */

var numSquares = n => {

    //returns if the number x is a valid square root ( can be represented as the square of an integer)
    let isSquare = x => Math.floor(Math.sqrt(x)) ** 2 === x

    if (isSquare(n))
        return 1 // that would be the fact that its equal to itself

    // Legendre's three square theorem: A natural number n can be represented as 
    // the sum of AT MOST three squares of integers if and only if : n!= 4^x ( 8*m+7)
    while (n % 4 === 0)
        n /= 4
    //Try contradicting Legendre
    if (n % 8 === 7)
        return 4

    // Manually checking for result 2, because Legendre states  AT MOST 3, 
    // so 2 is possible aswell
    for (let i = 0; i <= n; i++)
        // if x=n-i*i   and x is a valid square then OBVIOUSLY
        // n=i^2 +sqrt(x)^2  ,so n is a square of two numbers   
        if (isSquare(n - i * i))
            return 2

    // Legendre applies
    return 3
}

//DP
function numSquares(n) {

    // General strategy is to build up a memoization array with the smallest amount of squares needed to make the number at each index
    // since the only square in the beginning is 1, until we see 4, it's very boring:
    // to make 1, we use 1, to make 2 we use two 1's, to make 3, we use three 1's
    // mem[1] = 1, d[2] = 2, mem[3] = 3
    // initially, mem[4] will also use 1s and end up at 4
    // but now we can consider 2^2 too since the inner loop now allows it
    // we then compare, is what we have calculated so far better? or using this new square?
    // To answer that, we subtract the current square (4) from i (4) and look up in our mem lookup to see how many steps that took
    // mem[0] is zero of course, so we end up with Math.min(4, 0 + 1). The 2nd is less of course, so we set mem[4] to 1

    // Our memory lookup. Others often name this 'dp'
    let mem = [0];
    let i, j;

    // Outer loop, where we build up till we reach n
    for (i = 1; i <= n; i++) {

        // Initially, we have no idea how many steps it will take
        mem[i] = Infinity;

        // Now loop over all squares that are smaller or equal to the current i.
        for (j = 1; j * j <= i; j++) {

            // The smalles amount of squares is either what we already have, or what we can build with a new square and remainder
            mem[i] = Math.min(mem[i], mem[i - j * j] + 1)
        }


    }
    return mem[n];
}