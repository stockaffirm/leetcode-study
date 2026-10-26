window.PROBLEM = {
 "id": "3035",
 "title": "Maximum Palindromes After Operations",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You have a list of words. In one operation you may swap any character of any word with any character of any word (even inside the same word), as often as you like. Return the maximum number of words that can be made palindromes. Example: ['abbb','ba','aa'] → 3.",
 "why": "['abbb','ba','aa']: letters can be swapped between words; pairs available = 4, enough to make all three words palindromes → 3.",
 "idea": "Swapping lets you move any character anywhere, so only the total number of PAIRS of equal letters matters (odd lengths get their middle from any leftover letter). A word of length L needs L // 2 pairs. Serve the shortest words first while pairs last.",
 "input": "words = [\"abbb\",\"ba\",\"aa\"]",
 "output": "3",
 "notes": [],
 "best": "Swapping lets you move any character anywhere, so only the total number of PAIRS of equal letters matters (odd lengths get their middle from any leftover letter). A word of length L needs L // 2 pairs. Serve the shortest words first while pairs last.",
 "variants": [
  {
   "name": "Pool the letter pairs, serve short words first",
   "code": "class Solution:\n    def maxPalindromesAfterOperations(self, words):\n        cnt = Counter(''.join(words))\n        pairs = sum(v // 2 for v in cnt.values())\n        res = 0\n        for L in sorted(map(len, words)):\n            if pairs < L // 2:\n                break\n            pairs -= L // 2\n            res += 1\n        return res",
   "time": "O(n log n + total length)",
   "space": "O(1)",
   "explain": "Swapping lets you move any character anywhere, so only the total number of PAIRS of equal letters matters (odd lengths get their middle from any leftover letter). A word of length L needs L // 2 pairs. Serve the shortest words first while pairs last.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search the count",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxPalindromesAfterOperations(self, words):\n        cnt = Counter(''.join(words))\n        pairs = sum(v // 2 for v in cnt.values())\n        need = sorted(len(w) // 2 for w in words)\n        lo, hi = 0, len(words)\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if sum(need[:mid]) <= pairs:\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "If k palindromes are possible then the k shortest words are; binary search k and check that their half-lengths fit in the pairs.",
   "frames": [],
   "alt": true
  }
 ]
};
