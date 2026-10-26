window.PROBLEM = {
 "id": "908",
 "title": "Smallest Range I",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[0,10], k=2: raise 0 by 2 and lower 10 by 2 → [2,8], range 6.",
 "idea": "Every number can move by up to k either way, so the max and the min can approach each other by 2k in total. The answer is max(0, max − min − 2k).",
 "input": "nums = [0,10], k = 2",
 "output": "6",
 "notes": [],
 "best": "Every number can move by up to k either way, so the max and the min can approach each other by 2k in total. The answer is max(0, max − min − 2k).",
 "variants": [
  {
   "name": "Shrink the gap by 2k",
   "code": "class Solution:\n    def smallestRangeI(self, nums, k):\n        return max(0, max(nums) - min(nums) - 2 * k)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Every number can move by up to k either way, so the max and the min can approach each other by 2k in total. The answer is max(0, max − min − 2k).",
   "frames": []
  }
 ]
};
