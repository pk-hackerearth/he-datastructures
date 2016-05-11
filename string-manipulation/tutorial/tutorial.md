A string is essentially a sequence of characters. In other words, a string is an array of character data type. An instance of a string is called a string literal. For instance in C++: string s = "HackerEarth"; 
s is a string literal.

String Manipulation is a class of problems where a user is asked to process the given string and use/change its data. An example question would be a great way to understand the problems that are usually classified under this category.

 * Given a string S of length N, shift each character of the string by K positions to the right, where K<=N.
For example: Say S = "hacker" and K=2. Here N=6.
Shifting each character in S by 2 positions to the right would result into erhack.
Note that S[0] i.e. 'h' is moved by 2 positions to the S[2]. Also, S[5] i.e. 'r', which is the last character in S comes round-about back to S[1] as there is no space for 'r' to go beyond the limits of string length.

Approach:

Declare another auxillary string shiftedS that is of the same size as S.
Copy ith element of S to the (K+i)th position in shiftedS. This means, shiftedS[i+K]=S[i] where 0<=i<N.
Make sure that i+K never exceeds N, because that will try to access a memory location which is not declared in shiftedS. There's a simple trick to ensure that. Use (i+K)mod N for that.
Implementation:

void shiftByK(char S[], char shiftedS[], int N, int K) {
    // Iterate through the length of given string
    for(int i=0; i<N; i++) {
        // Find the index for this current character in shiftedS[]
        int idx = (i+K) % N;
        // Copy that character at the found index idx
        shiftedS[idx] = S[i];
    }
    // Add a NULL character to mark the end of string
    shiftedS[N] = '\0';
}
Every character array in C/C++ ends with a '\0' (NULL) character. It marks the end of the string. If it is not added in the end, the code may produce garbage characters after the string.

TEST YOUR UNDERSTANDING
Reverse the Substring Given a string S, and two numbers N, M - arrange the characters of string in between the indexes N and M (both inclusive) in descending order. (Indexing starts from 0).

Input Format:
First line contains T - number of test cases.
Next T lines contains a string(S) and two numbers(N, M) separated by spaces.

Output Format:
Print the modified string for each test case in new line.

Constraints:

* 1<=T<=1000
* 1<=|S|<=10000 // |S| denotes the length of string.
* 0<=N<=M<|S|
* S E[a,z]