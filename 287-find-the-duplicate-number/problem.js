window.PROBLEM = {
 "id": "287",
 "title": "Find the Duplicate Number",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "A list nums holds n+1 whole numbers, each between 1 and n, so at least one number must repeat; exactly one value is repeated (possibly several times). Return that value WITHOUT changing the list and using only a fixed amount of extra memory. Example: [1,3,4,2,2] → 2.",
 "why": "A list of n+1 numbers uses only the values 1..n, so one value repeats. Find it without changing the list or using extra memory. [1,3,4,2,2] → 2.",
 "idea": "Treat each value as a pointer to the next position: the repeat creates a loop. A slow and a fast pointer meet inside the loop; restarting one from the start and moving both one step at a time makes them meet at the loop entrance — the duplicate.",
 "input": "[1, 3, 4, 2, 2]",
 "output": "2",
 "notes": [],
 "best": "Treat each value as a pointer to the next position: the repeat creates a loop. A slow and a fast pointer meet inside the loop; restarting one from the start and moving both one step at a time makes them meet at the loop entrance — the duplicate.",
 "variants": [
  {
   "name": "Floyd's cycle detection",
   "code": "class Solution:\n    def findDuplicate(self, nums):\n        slow = fast = nums[0]\n        while True:\n            slow = nums[slow]\n            fast = nums[nums[fast]]\n            if slow == fast: break\n        slow = nums[0]\n        while slow != fast:\n            slow, fast = nums[slow], nums[fast]\n        return slow",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Treat each value as a pointer to the next position: the repeat creates a loop. A slow and a fast pointer meet inside the loop; restarting one from the start and moving both one step at a time makes them meet at the loop entrance — the duplicate.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set of seen numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDuplicate(self, nums):\n        seen = set()\n        for x in nums:\n            if x in seen: return x\n            seen.add(x)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The first number seen twice is the answer (uses extra memory).",
   "frames": [],
   "alt": true
  },
  {
   "name": "Binary search on the value",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDuplicate(self, nums):\n        lo, hi = 1, len(nums) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if sum(x <= mid for x in nums) > mid: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "If more than mid numbers are ≤ mid, the duplicate is ≤ mid (pigeonhole). Halve the value range.",
   "frames": [],
   "alt": true
  }
 ]
};
