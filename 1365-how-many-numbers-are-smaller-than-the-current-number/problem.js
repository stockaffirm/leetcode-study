window.PROBLEM = {
 "id": "1365",
 "title": "How Many Numbers Are Smaller Than the Current Number",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[8,1,2,2,3] → [4,0,1,1,3].",
 "idea": "For each value the count of smaller numbers is the index of its first occurrence in the sorted array.",
 "input": "nums = [8,1,2,2,3]",
 "output": "[4, 0, 1, 1, 3]",
 "notes": [],
 "best": "For each value the count of smaller numbers is the index of its first occurrence in the sorted array.",
 "variants": [
  {
   "name": "Sorted copy and bisect",
   "code": "class Solution:\n    def smallerNumbersThanCurrent(self, nums):\n        s = sorted(nums)\n        return [bisect_left(s, x) for x in nums]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each value the count of smaller numbers is the index of its first occurrence in the sorted array.",
   "frames": []
  }
 ]
};
