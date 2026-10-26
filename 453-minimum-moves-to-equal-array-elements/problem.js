window.PROBLEM = {
 "id": "453",
 "title": "Minimum Moves to Equal Array Elements",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "In one move you increment n−1 elements by 1. Return the minimum number of moves to make all elements equal. Example: [1,2,3] → 3.",
 "why": "[1,2,3] → 3 moves: [2,3,3] → [3,4,3] → [4,4,4].",
 "idea": "Adding 1 to n−1 elements changes the gaps exactly like subtracting 1 from the remaining one. So the answer is how far every element is above the minimum: sum − n × min.",
 "input": "nums = [1,2,3]",
 "output": "3",
 "notes": [],
 "best": "Adding 1 to n−1 elements changes the gaps exactly like subtracting 1 from the remaining one. So the answer is how far every element is above the minimum: sum − n × min.",
 "variants": [
  {
   "name": "Incrementing n−1 is decrementing one",
   "code": "class Solution:\n    def minMoves(self, nums):\n        return sum(nums) - len(nums) * min(nums)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Adding 1 to n−1 elements changes the gaps exactly like subtracting 1 from the remaining one. So the answer is how far every element is above the minimum: sum − n × min.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add up the gaps",
   "tag": "Alternative",
   "code": "class Solution:\n    def minMoves(self, nums):\n        m = min(nums)\n        return sum(x - m for x in nums)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Sum x − min for each element.",
   "frames": [],
   "alt": true
  }
 ]
};
