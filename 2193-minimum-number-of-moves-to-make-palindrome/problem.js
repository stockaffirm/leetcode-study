window.PROBLEM = {
 "id": "2193",
 "title": "Minimum Number of Moves to Make Palindrome",
 "level": "Hard",
 "topic": "Greedy",
 "question": "In one move swap two neighbouring characters. Return the minimum number of moves to turn s into a palindrome (one is guaranteed to be possible). Example: 'aabb' → 2.",
 "why": "'aabb': the last b's partner is at index 2; two adjacent swaps → 'abba' → 2.",
 "idea": "Look at the last character. Find the first occurrence of the same letter: bringing it to the front costs that index in swaps. Remove both and repeat on the inside. If the last letter is unique (the odd-length middle), move it to the centre at the cost of len // 2 and remove it.",
 "input": "s = \"aabb\"",
 "output": "2",
 "notes": [],
 "best": "Look at the last character. Find the first occurrence of the same letter: bringing it to the front costs that index in swaps. Remove both and repeat on the inside. If the last letter is unique (the odd-length middle), move it to the centre at the cost of len // 2 and remove it.",
 "variants": [
  {
   "name": "Match the last letter with its nearest partner",
   "code": "class Solution:\n    def minMovesToMakePalindrome(self, s):\n        s = list(s)\n        moves = 0\n        while len(s) > 1:\n            i = s.index(s[-1])\n            if i == len(s) - 1:\n                moves += len(s) // 2\n                s.pop()\n            else:\n                moves += i\n                s.pop(i)\n                s.pop()\n        return moves",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Look at the last character. Find the first occurrence of the same letter: bringing it to the front costs that index in swaps. Remove both and repeat on the inside. If the last letter is unique (the odd-length middle), move it to the centre at the cost of len // 2 and remove it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Match the first letter with its last twin",
   "tag": "Alternative",
   "code": "class Solution:\n    def minMovesToMakePalindrome(self, s):\n        s = list(s)\n        moves = 0\n        while len(s) > 1:\n            c = s[0]\n            j = len(s) - 1 - s[::-1].index(c)\n            if j == 0:\n                moves += len(s) // 2\n                s.pop(0)\n            else:\n                moves += len(s) - 1 - j\n                s.pop(j)\n                s.pop(0)\n        return moves",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Mirror image of the main idea: take the first letter and bring its farthest twin to the end.",
   "frames": [],
   "alt": true
  }
 ]
};
