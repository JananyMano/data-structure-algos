# Array & Strings

#### Implementation of an algorithm to determine if a string has all unique characters. 

We assume the the character set is ASCII (and not Unicode string).
You can't have a string with 280 unique characters if there are only 256 possible unique characters. One simple optimization we can make to this problem is to automatically return false if the length of the string is greater than the number of unique characters in the alphabet.

The methods creates an array of boolean values, where the flag at index i indicates wheter character i in the alphabet is contained in the string. If you run across this character a second time, you can immediately return false.

The time complexity for this code is O(n), where n is the length of the string. The space complexity is O(1).

> See [isUniqueChars2.js](isUniqueChars2.js) for further details.

#### Implementation of an algorithm to determine if a string has all unique characters. Use a bit vector.

We assume the the character set is ASCII (and not Unicode string), and the string only uses the lower case letters a through z.

We can use a bit vector and reduce the isUniqueChars2' space usage by a factor of eight.

> See [isUniqueCharsWithBit.js](isUniqueCharsWithBit.js) for further details.

#### Implementation of an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures ? 

We assume the the character set is ASCII (and not Unicode string).

This methods compares every character of the string to every other character of the string. This will take O(n²) time and 0(1) space.

#### Implementation of an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures ? You are allowed to modify the input string.

We assume the the character set is ASCII (and not Unicode string).

If we are allowed to modify the input string, we could sort the string in O(n log(n)) time and then linearly check the string for neighboring characters that are identical.

#### Reverse a string

> See [reverse.js](reverse.js) for further details.

#### Anagram

Given two strings, this methods decides if one is the permutation of the other. We assume that the Anagram comparison is case sensitive and that we are only working with ASCII characters.

There are two ways to implement the method:
- If two strings are anagram, then we know they have the same characters, but in different orders. Therefore, sorting the strings will put the characters from two anagrams int the same order. We then just need to compare the sorted versions of the strings.
- We can also use the definition of an anagram: two words with the same character counts.We simply iterate through this code, counting how many times each character appears.

> See [isAnagram.js](isAnagram.js) for further details.

#### Replace space into a string

> See [replaceSpace.js](isAnagram.js) for further details.



