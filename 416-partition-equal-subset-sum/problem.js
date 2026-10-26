window.PROBLEM = {
 "id": "416",
 "title": "Partition Equal Subset Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Can the numbers be split into two groups with equal sums?",
 "idea": "The total must be even; then ask if some subset sums to half. Keep all reachable sums as bits of one big integer and shift-or for each number.",
 "input": "[1,5,11,5]",
 "output": "True",
 "notes": [],
 "best": "The total must be even; then ask if some subset sums to half. Keep all reachable sums as bits of one big integer and shift-or for each number.",
 "variants": [
  {
   "name": "Bitset subset sums",
   "code": "class Solution:\n    def canPartition(self, nums):\n        total = sum(nums)\n        if total % 2: return False\n        bits = 1\n        for x in nums: bits |= bits << x\n        return bits >> (total // 2) & 1 == 1",
   "time": "O(n·S/64)",
   "space": "O(S)",
   "explain": "The total must be even; then ask if some subset sums to half. Keep all reachable sums as bits of one big integer and shift-or for each number.",
   "frames": []
  }
 ]
};
