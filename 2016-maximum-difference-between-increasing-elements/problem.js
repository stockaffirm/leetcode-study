window.PROBLEM = {
 "id": "2016",
 "title": "Maximum Difference Between Increasing Elements",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[7,1,5,4]: buy at 1, sell at 5 → 4.",
 "idea": "For each j find the smallest earlier value; if it is smaller than nums[j], nums[j] − that min is a candidate. Return the largest candidate, or −1 if no pair has nums[i] < nums[j].",
 "input": "nums = [7,1,5,4]",
 "output": "4",
 "notes": [],
 "best": "For each j find the smallest earlier value; if it is smaller than nums[j], nums[j] − that min is a candidate. Return the largest candidate, or −1 if no pair has nums[i] < nums[j].",
 "variants": [
  {
   "name": "Track the minimum so far",
   "code": "class Solution:\n    def maximumDifference(self, nums):\n        best = -1\n        lo = nums[0]\n        for x in nums[1:]:\n            if x > lo:\n                best = max(best, x - lo)\n            else:\n                lo = x\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each j find the smallest earlier value; if it is smaller than nums[j], nums[j] − that min is a candidate. Return the largest candidate, or −1 if no pair has nums[i] < nums[j].",
   "frames": []
  }
 ]
};
