window.PROBLEM = {
 "id": "344",
 "title": "Reverse String",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "Reverse a list of characters s in place (change the list itself, do not make a new one). Example: ['h','e','l','l','o'] → ['o','l','l','e','h'].",
 "why": "Reverse a list of characters in place: h,e,l,l,o → o,l,l,e,h.",
 "idea": "Keep one pointer at each end, swap, and walk inward until they meet.",
 "input": "[\"h\",\"e\",\"l\",\"l\",\"o\"]",
 "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
 "notes": [],
 "best": "Keep one pointer at each end, swap, and walk inward until they meet.",
 "variants": [
  {
   "name": "Swap from both ends",
   "code": "class Solution:\n    def reverseString(self, s):\n        i, j = 0, len(s) - 1\n        while i < j:\n            s[i], s[j] = s[j], s[i]\n            i += 1\n            j -= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep one pointer at each end, swap, and walk inward until they meet.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Slice assignment",
   "tag": "Pythonic",
   "code": "class Solution:\n    def reverseString(self, s):\n        s[:] = s[::-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Replace the list's contents with its reversed copy (uses extra memory).",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def reverseString(self, s):\n        def go(i, j):\n            if i >= j: return\n            s[i], s[j] = s[j], s[i]\n            go(i + 1, j - 1)\n        go(0, len(s) - 1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Swap the two ends then recurse on the inside.",
   "frames": [],
   "alt": true
  }
 ]
};
