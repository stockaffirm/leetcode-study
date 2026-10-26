window.PROBLEM = {
 "id": "3731",
 "title": "Find Missing Elements",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,4,2,5] → 3 is missing.",
 "idea": "The range is from the smallest to the largest element of nums; return the integers in that range that are not in the array (ascending).",
 "input": "nums = [1,4,2,5]",
 "output": "[3]",
 "notes": [],
 "best": "The range is from the smallest to the largest element of nums; return the integers in that range that are not in the array (ascending).",
 "variants": [
  {
   "name": "Numbers between min and max that are absent",
   "code": "class Solution:\n    def findMissingElements(self, nums):\n        s = set(nums)\n        return [x for x in range(min(nums), max(nums) + 1) if x not in s]",
   "time": "O(range)",
   "space": "O(n)",
   "explain": "The range is from the smallest to the largest element of nums; return the integers in that range that are not in the array (ascending).",
   "frames": []
  }
 ]
};
