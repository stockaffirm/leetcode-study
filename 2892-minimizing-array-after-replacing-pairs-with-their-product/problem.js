window.PROBLEM = {
 "id": "2892",
 "title": "Minimizing Array After Replacing Pairs With Their Product",
 "level": "Medium",
 "topic": "Greedy",
 "question": "In one operation you may replace two neighbouring numbers by their product if the product is at most k. Return the minimum possible length of the array. Example: [2,3,3,7,3,5], k=20 → 3.",
 "why": "[2,3,3,7,3,5], k=20: [2·3·3=18],[7·3=21 too big → 7],[3·5=15] → 3 groups.",
 "idea": "A zero makes everything collapse to one number. Otherwise scan left to right keeping the running product; extend it while the product stays ≤ k, else start a new group. Merging as early as possible never hurts.",
 "input": "nums = [2,3,3,7,3,5], k = 20",
 "output": "3",
 "notes": [],
 "best": "A zero makes everything collapse to one number. Otherwise scan left to right keeping the running product; extend it while the product stays ≤ k, else start a new group. Merging as early as possible never hurts.",
 "variants": [
  {
   "name": "Greedily merge while the product stays ≤ k",
   "code": "class Solution:\n    def minArrayLength(self, nums, k):\n        if 0 in nums:\n            return 1\n        groups = 1\n        cur = nums[0]\n        for x in nums[1:]:\n            if cur * x <= k:\n                cur *= x\n            else:\n                groups += 1\n                cur = x\n        return groups",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A zero makes everything collapse to one number. Otherwise scan left to right keeping the running product; extend it while the product stays ≤ k, else start a new group. Merging as early as possible never hurts.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Merge adjacent pairs until stuck",
   "tag": "Brute force",
   "code": "class Solution:\n    def minArrayLength(self, nums, k):\n        if 0 in nums:\n            return 1\n        a = list(nums)\n        changed = True\n        while changed:\n            changed = False\n            for i in range(len(a) - 1):\n                if a[i] * a[i + 1] <= k:\n                    a[i:i + 2] = [a[i] * a[i + 1]]\n                    changed = True\n                    break\n        return len(a)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Keep merging the leftmost adjacent pair whose product is at most k.",
   "frames": [],
   "alt": true
  }
 ]
};
