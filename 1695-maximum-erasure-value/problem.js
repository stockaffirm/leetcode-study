window.PROBLEM = {
 "id": "1695",
 "title": "Maximum Erasure Value",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "[4,2,4,5,6] → best window 2,4,5,6 → 17.",
 "idea": "Keep a window with no repeated values and its running sum. When the new value is already inside, shrink from the left until it is gone. Track the best sum.",
 "input": "nums = [4,2,4,5,6]",
 "output": "17",
 "notes": [],
 "best": "Keep a window with no repeated values and its running sum. When the new value is already inside, shrink from the left until it is gone. Track the best sum.",
 "variants": [
  {
   "name": "Sliding window of distinct values",
   "code": "class Solution:\n    def maximumUniqueSubarray(self, nums):\n        seen = set()\n        left = total = best = 0\n        for x in nums:\n            while x in seen:\n                seen.remove(nums[left])\n                total -= nums[left]\n                left += 1\n            seen.add(x)\n            total += x\n            best = max(best, total)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a window with no repeated values and its running sum. When the new value is already inside, shrink from the left until it is gone. Track the best sum.",
   "frames": []
  }
 ]
};
