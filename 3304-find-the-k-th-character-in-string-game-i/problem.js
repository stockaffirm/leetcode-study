window.PROBLEM = {
 "id": "3304",
 "title": "Find the K-th Character in String Game I",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Start with the word 'a'. Each operation appends a copy of the word in which every letter is replaced by the next letter (z becomes a). Return the k-th character after enough operations (k ≥ 1). Example: k=5 → 'b' (a → ab → abbc → abbcbccd).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count the 1 bits of k − 1",
   "tag": "Math",
   "code": "class Solution:\n    def kthCharacter(self, k):\n        return chr(97 + bin(k - 1).count(\"1\") % 26)",
   "time": "O(log k)",
   "space": "O(1)",
   "explain": "The letter at position k is 'a' shifted by the number of 1 bits in k − 1.",
   "frames": [],
   "alt": true
  }
 ]
};
