window.PROBLEM = {
 "id": "3736",
 "title": "Minimum Moves to Equal Array Elements III",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[2,1,3] → raise 2 by 1 and 1 by 2 → 3 moves.",
 "idea": "Each move adds 1 to one element, so the common value is at least the maximum, and raising everything to the maximum is optimal. Moves = n × max − sum.",
 "input": "nums = [2,1,3]",
 "output": "3",
 "notes": [],
 "best": "Each move adds 1 to one element, so the common value is at least the maximum, and raising everything to the maximum is optimal. Moves = n × max − sum.",
 "variants": [
  {
   "name": "Raise everything to the maximum",
   "code": "class Solution:\n    def minMoves(self, nums):\n        return max(nums) * len(nums) - sum(nums)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each move adds 1 to one element, so the common value is at least the maximum, and raising everything to the maximum is optimal. Moves = n × max − sum.",
   "frames": []
  }
 ]
};
