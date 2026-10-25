window.PROBLEM = {
 "id": "186",
 "title": "Reverse Words in a String II",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "A sentence is given as a list of characters (words separated by single spaces, no extra spaces). Reverse the ORDER of the words, keeping each word's letters in order, modifying the list itself. Example: 'the sky is blue' → 'blue is sky the'.",
 "why": "A sentence is given as a list of characters. Reverse the order of the words in place.",
 "idea": "Reverse the whole list; every word is now backwards, so reverse each word back to normal.",
 "input": "'the sky is blue'",
 "output": "'blue is sky the'",
 "notes": [],
 "best": "Reverse the whole list; every word is now backwards, so reverse each word back to normal.",
 "variants": [
  {
   "name": "Reverse everything, then each word",
   "code": "class Solution:\n    def reverseWords(self, s):\n        def rev(l, r):\n            while l < r:\n                s[l], s[r] = s[r], s[l]\n                l += 1\n                r -= 1\n        rev(0, len(s) - 1)\n        start = 0\n        for i in range(len(s) + 1):\n            if i == len(s) or s[i] == ' ':\n                rev(start, i - 1)\n                start = i + 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Reverse the whole list; every word is now backwards, so reverse each word back to normal.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Split, reverse the words, join",
   "tag": "Pythonic",
   "code": "class Solution:\n    def reverseWords(self, s):\n        s[:] = list(' '.join(''.join(s).split(' ')[::-1]))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Not in place: build the reversed sentence with split and join and copy it back.",
   "frames": [],
   "alt": true
  }
 ]
};
