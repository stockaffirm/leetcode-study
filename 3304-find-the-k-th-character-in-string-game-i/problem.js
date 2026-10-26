window.PROBLEM = {
 "id": "3304",
 "title": "Find the K-th Character in String Game I",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Start 'a'; every round append the word with each letter moved one step forward: a → ab → abbc → abbcbccd. The 5th letter is 'b'.",
 "idea": "Do what the game says: repeat 'append the next-letter version of the whole word' until the word has at least k letters, then read position k.",
 "input": "k = 5",
 "output": "\"b\"",
 "notes": [],
 "best": "Do what the game says: repeat 'append the next-letter version of the whole word' until the word has at least k letters, then read position k.",
 "variants": [
  {
   "name": "Build the word until it is long enough",
   "code": "class Solution:\n    def kthCharacter(self, k):\n        word = \"a\"\n        while len(word) < k:\n            word += \"\".join(chr((ord(c) - 97 + 1) % 26 + 97) for c in word)\n        return word[k - 1]",
   "time": "O(k)",
   "space": "O(k)",
   "explain": "Do what the game says: repeat 'append the next-letter version of the whole word' until the word has at least k letters, then read position k.",
   "frames": []
  }
 ]
};
