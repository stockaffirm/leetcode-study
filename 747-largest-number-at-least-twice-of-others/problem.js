window.PROBLEM = {
 "id": "747",
 "title": "Largest Number At Least Twice of Others",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[3,6,1,0] → 6 ≥ 2·3 → index 1.",
 "idea": "Find the largest and second largest values. The largest is dominant if it is at least twice the second largest; return its index, else −1.",
 "input": "nums = [3,6,1,0]",
 "output": "1",
 "notes": [],
 "best": "Find the largest and second largest values. The largest is dominant if it is at least twice the second largest; return its index, else −1.",
 "variants": [
  {
   "name": "Compare the maximum with the second maximum",
   "code": "class Solution:\n    def dominantIndex(self, nums):\n        top = max(nums)\n        second = max((x for x in nums if x != top), default=0)\n        return nums.index(top) if top >= 2 * second else -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Find the largest and second largest values. The largest is dominant if it is at least twice the second largest; return its index, else −1.",
   "frames": []
  }
 ]
};
