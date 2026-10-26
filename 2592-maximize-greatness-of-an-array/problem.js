window.PROBLEM = {
 "id": "2592",
 "title": "Maximize Greatness of an Array",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "Rearrange the list into a new list perm. 'Greatness' is the number of positions where perm[i] > nums[i]. Make it as big as possible.",
 "idea": "Sort. Walk through the values in order and give each position the next strictly larger value, using a second pointer that only moves when it finds one.",
 "input": "[1, 3, 5, 2, 1, 3, 1]",
 "output": "4",
 "notes": [],
 "best": "Sort. Walk through the values in order and give each position the next strictly larger value, using a second pointer that only moves when it finds one.",
 "variants": [
  {
   "name": "Sort + two pointers",
   "code": "class Solution:\n    def maximizeGreatness(self, nums):\n        nums = sorted(nums)\n        i = 0\n        for x in nums:\n            if x > nums[i]: i += 1\n        return i",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort. Walk through the values in order and give each position the next strictly larger value, using a second pointer that only moves when it finds one.",
   "frames": []
  }
 ]
};
