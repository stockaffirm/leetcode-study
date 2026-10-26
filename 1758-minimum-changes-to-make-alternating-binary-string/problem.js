window.PROBLEM = {
 "id": "1758",
 "title": "Minimum Changes To Make Alternating Binary String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Make a 0/1 string alternate (0101… or 1010…) with the fewest flips.",
 "idea": "Count how many characters differ from the pattern 0101…. The other pattern 1010… differs in all the remaining positions, so the answer is min(diff, n − diff).",
 "input": "\"0100\"",
 "output": "1",
 "notes": [],
 "best": "Count how many characters differ from the pattern 0101…. The other pattern 1010… differs in all the remaining positions, so the answer is min(diff, n − diff).",
 "variants": [
  {
   "name": "Compare with 0101… and use the complement",
   "code": "class Solution:\n    def minOperations(self, s):\n        diff = sum(1 for i, ch in enumerate(s) if int(ch) != i % 2)\n        return min(diff, len(s) - diff)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count how many characters differ from the pattern 0101…. The other pattern 1010… differs in all the remaining positions, so the answer is min(diff, n − diff).",
   "frames": []
  }
 ]
};
