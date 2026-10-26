window.PROBLEM = {
 "id": "2270",
 "title": "Number of Ways to Split Array",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "Cut the list into a non-empty left part and non-empty right part so that the left sum is at least the right sum. How many cuts work?",
 "idea": "Know the total once. Walking left to right, the right sum is total − left sum, so each cut is checked in O(1).",
 "input": "[10, 4, -8, 7]",
 "output": "2",
 "notes": [],
 "best": "Know the total once. Walking left to right, the right sum is total − left sum, so each cut is checked in O(1).",
 "variants": [
  {
   "name": "Running left sum vs the rest",
   "code": "class Solution:\n    def waysToSplitArray(self, nums):\n        total, left, ways = sum(nums), 0, 0\n        for i in range(len(nums) - 1):\n            left += nums[i]\n            if left >= total - left: ways += 1\n        return ways",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Know the total once. Walking left to right, the right sum is total − left sum, so each cut is checked in O(1).",
   "frames": []
  }
 ]
};
